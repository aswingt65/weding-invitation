import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';

const manifest = JSON.parse(await fs.readFile('reference/manifest.json', 'utf8'));
const images = JSON.parse(await fs.readFile('reference/images.json', 'utf8'));
for (const item of [...manifest.resources, ...Object.values(images)]) {
  const bytes = await fs.readFile('reference/' + item.file);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), item.sha256, item.file);
  await fs.access('dist/' + item.file);
}
const html = await fs.readFile('dist/index.html', 'utf8');
for (const section of ['Open to Reveal', 'Engagement Ceremony', 'Wedding Ceremony', 'Contact Us', 'card-audio.mp3']) {
  assert.ok(html.includes(section), `Missing ${section}`);
}
const client = (await fs.readFile('dist/_next/static/chunks/app/page-d58aa943c3352356.js', 'utf8'))
  .replace(/\/\*[\s\S]*?\*\//g, '');
for (const value of [
  'Dr. Anthea Judy Gilbert', 'Dr. Arun Joy Thomas', 'Mark 10:9',
  'Therefore what God has joined together, let no one separate.',
  'Poomughathu House, Mukkad, Kavandu P.O, Kollam - 691003',
  'Sea View, Pangappara P.O, Thiruvananthapuram',
  '9207148109', '9446590351', '9497816261', '9497331582',
  '26th December 2026', '30th December 2026',
  'Holy Family Roman Catholic Church',
  'Trinity Medical College Church',
  'Sooryaprabha Convention Centre',
  'https://maps.app.goo.gl/9XNfZS7HpaZpu4T96',
  'https://maps.app.goo.gl/gGeWqZYqqkfbE4QLA',
  'https://maps.app.goo.gl/dwpdAW2Uzjs1xFCW9',
]) {
  assert.ok(html.includes(value), `Initial HTML missing: ${value}`);
  assert.ok(client.includes(value), `Client code missing: ${value}`);
}
for (const stale of [
  'Sandra', 'Mathews', 'Harison', 'Daisy', 'Martin Mathew', 'Nisha Martin',
  'Matthew 19:6', 'April 2026', '/proposel.jpeg', '/cupid.png',
  'Vayalil', 'Punchathalackal', 'Neendakara', 'Muttuchira', 'St. Alphonsa',
  'Holy Ghost', '9947432881', '9947633881', 'sandra-mary-harison.vercel.app',
  'Parents of the groom',
]) {
  assert.ok(!html.includes(stale), `Old content in initial HTML: ${stale}`);
  assert.ok(!client.includes(stale), `Old content in active client code: ${stale}`);
}
for (const target of ['2026-12-26T11:00:00+05:30', '2026-12-30T11:11:00+05:30']) {
  assert.ok(client.includes(target), `Countdown missing India timezone: ${target}`);
}
for (const number of ['9207148109', '9446590351', '9497816261', '9497331582']) {
  assert.ok(html.includes(`tel:+91${number}`), `Missing separate call link: ${number}`);
}
assert.match(html, /<link\b(?=[^>]*rel="icon")(?=[^>]*href="\/assets\/angel-silhouette\.png")[^>]*>/, 'Missing angel favicon');
console.log(`Verified ${manifest.resources.length} reference files and ${Object.keys(images).length} image variants; all present in the build.`);
console.log('Verified customized content, separate venue links, phone links, and India-time countdown targets.');
