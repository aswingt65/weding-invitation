import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const bride = await fs.readFile('dist/index.html', 'utf8');
const groom = await fs.readFile('dist/groom/index.html', 'utf8');
const client = (await fs.readFile('src/groom/invitation.js', 'utf8')).replace(/\/\*[\s\S]*?\*\//g, '');
for (const value of [
  'our beloved son', 'Aswin George Thomas', 'Parents of the groom',
  'Trinity (Medical College) Mar Thoma Syrian Church',
  '9497816261', '9497331582', 'Mark 10:9',
  '26th December 2026', '30th December 2026',
  'https://maps.app.goo.gl/9XNfZS7HpaZpu4T96',
  'https://maps.app.goo.gl/gGeWqZYqqkfbE4QLA',
  'https://maps.app.goo.gl/dwpdAW2Uzjs1xFCW9',
]) {
  assert.ok(groom.includes(value), `Groom initial HTML missing ${value}`);
  assert.ok(client.includes(value), `Groom client missing ${value}`);
}
for (const stale of ['our beloved daughter', "Anthea's Parents", 'Parents of the bride', 'Sandra', 'Harison']) {
  assert.ok(!groom.includes(stale), `Unexpected groom HTML content: ${stale}`);
  assert.ok(!client.includes(stale), `Unexpected groom client content: ${stale}`);
}
const names = [...groom.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/g)].map(match => match[1]);
assert.deepEqual(names, ['Dr. Arun Joy Thomas', 'Dr. Anthea Judy Gilbert']);
assert.ok(groom.includes('groom-page.js') && groom.includes('groom.css'));
assert.ok(!groom.includes('page-d58aa943c3352356.js'));
assert.ok(!bride.includes('groom-page.js') && !bride.includes('groom.css'));
assert.ok(bride.includes('Trinity Medical College Church'));
assert.ok(!bride.includes('Trinity (Medical College) Mar Thoma Syrian Church'));
for (const [source, built] of [
  ['src/index.html', 'dist/index.html'],
  ['src/invitation.js', 'dist/_next/static/chunks/app/page-d58aa943c3352356.js'],
  ['src/styles.css', 'dist/_next/static/css/ca116a08f154ead5.css'],
]) assert.deepEqual(await fs.readFile(built), await fs.readFile(source), `Bride output changed: ${built}`);
for (const file of ['dist/_next/static/chunks/app/groom-page.js', 'dist/_next/static/css/groom.css']) await fs.access(file);
console.log('Verified groom content, name order, separate assets/routes, and unchanged bride output.');
