import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createReadStream } from 'node:fs';

const root = path.resolve('dist');
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.woff2': 'font/woff2', '.png': 'image/png', '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp3': 'audio/mpeg',
};
const imageManifest = JSON.parse(await fs.readFile(path.join(root, 'images.json'), 'utf8'));
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let resource = decodeURIComponent(url.pathname);
    if (resource === '/groom' || resource === '/groom/') resource = '/groom/index.html';
    if (resource === '/favicon.ico') { res.writeHead(204); res.end(); return; }
    if (resource === '/_next/image') {
      const key = `${url.searchParams.get('url')}|${url.searchParams.get('w')}|${url.searchParams.get('q')}`;
      const entry = imageManifest[key];
      if (!entry) { res.writeHead(404); res.end('Image not captured'); return; }
      resource = '/' + entry.file;
    }
    const file = path.resolve(root, '.' + (resource === '/' ? '/index.html' : resource));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    const stat = await fs.stat(file);
    if (!stat.isFile()) { res.writeHead(404); res.end(); return; }
    const headers = { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'Accept-Ranges': 'bytes' };
    const match = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range || '');
    if (match) {
      const start = Number(match[1]);
      const end = Math.min(match[2] ? Number(match[2]) : stat.size - 1, stat.size - 1);
      if (start > end || start >= stat.size) { res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` }); res.end(); return; }
      res.writeHead(206, { ...headers, 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${stat.size}` });
      if (req.method === 'HEAD') res.end(); else createReadStream(file, { start, end }).pipe(res);
    } else {
      res.writeHead(200, { ...headers, 'Content-Length': stat.size });
      if (req.method === 'HEAD') res.end(); else createReadStream(file).pipe(res);
    }
  } catch (error) {
    res.writeHead(error.code === 'ENOENT' ? 404 : 500);
    res.end(error.code === 'ENOENT' ? 'Not found' : 'Unable to serve file');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Invitation: http://localhost:${port}`));
