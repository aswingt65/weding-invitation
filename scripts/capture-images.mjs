import fs from 'node:fs/promises';
import crypto from 'node:crypto';

const images = {};
await fs.mkdir('reference/images', { recursive: true });
for (const name of ['cupid.png', 'proposel.jpeg']) {
  for (const width of [640, 750, 828, 1080, 1200, 1920, 2048, 3840]) {
    const query = `url=${encodeURIComponent('/' + name)}&w=${width}&q=75`;
    const response = await fetch(`https://sandra-mary-harison.vercel.app/_next/image?${query}`, { headers: { Accept: 'image/webp' } });
    if (!response.ok) throw new Error(`${query}: ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    const type = response.headers.get('content-type');
    const ext = type.includes('webp') ? 'webp' : type.includes('png') ? 'png' : 'jpeg';
    const file = `images/${name.split('.')[0]}-${width}.${ext}`;
    await fs.writeFile('reference/' + file, bytes);
    images[`/${name}|${width}|75`] = { file, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') };
  }
}
await fs.writeFile('reference/images.json', JSON.stringify(images, null, 2) + '\n');
console.log(`Captured ${Object.keys(images).length} responsive image variants.`);
