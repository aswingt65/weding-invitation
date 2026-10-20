import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const origin = 'https://sandra-mary-harison.vercel.app';
const root = path.resolve('reference');
await fs.mkdir(root, { recursive: true });
const pending = ['/'];
const seen = new Set();
const manifest = [];
function discover(text) {
  const paths = [
    ...text.matchAll(/["'(](\/(?!\/)[^"'()\s<>\\]*?\.(?:js|css|woff2?|png|jpe?g|webp|svg|mp3|ico|gif))(?:["')?])/g),
    ...text.matchAll(/["'](static\/[^"']+\.js)["']/g),
  ];
  for (const match of paths) {
    const value = match[1].startsWith('static/') ? '/_next/' + match[1] : match[1];
    if (!seen.has(value)) pending.push(value);
  }
  for (const match of text.matchAll(/url=(%2F[^&"\\\s]+)/g)) {
    const value = decodeURIComponent(match[1]);
    if (!seen.has(value)) pending.push(value);
  }
  for (const match of text.matchAll(/url\((?:["'])?(\.\.\/media\/[^)"']+)/g)) {
    pending.push('/_next/static/media/' + match[1].split('/').pop());
  }
}
while (pending.length) {
  const resource = pending.shift();
  if (seen.has(resource)) continue;
  seen.add(resource);
  const response = await fetch(origin + resource);
  if (!response.ok) throw new Error(`${resource}: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const local = resource === '/' ? 'index.html' : resource.slice(1);
  const target = path.join(root, local);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, bytes);
  manifest.push({ url: origin + resource, file: local, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') });
  if (/\.(js|css)$/.test(local) || local === 'index.html') discover(bytes.toString());
  console.log(`${local} (${bytes.length} bytes)`);
}
await fs.writeFile(path.join(root, 'manifest.json'), JSON.stringify({ capturedAt: new Date().toISOString(), origin, resources: manifest }, null, 2) + '\n');
