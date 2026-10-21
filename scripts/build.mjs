import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
await fs.mkdir(root, { recursive: true });
await fs.cp('reference', root, { recursive: true });
await fs.copyFile('src/index.html', path.join(root, 'index.html'));
await fs.copyFile('src/invitation.js', path.join(root, '_next/static/chunks/app/page-d58aa943c3352356.js'));
await fs.copyFile('src/styles.css', path.join(root, '_next/static/css/ca116a08f154ead5.css'));
await fs.cp('src/assets', path.join(root, 'assets'), { recursive: true });
// The groom route has an independent document and client module. Bride files above
// are copied verbatim; only the groom stylesheet receives its theme overrides.
await fs.mkdir(path.join(root, 'groom'), { recursive: true });
await fs.copyFile('src/groom/index.html', path.join(root, 'groom/index.html'));
await fs.copyFile('src/groom/invitation.js', path.join(root, '_next/static/chunks/app/groom-page.js'));
await fs.writeFile(path.join(root, '_next/static/css/groom.css'),
  await fs.readFile('src/styles.css', 'utf8') + '\n' + await fs.readFile('src/groom/styles.css', 'utf8'));
console.log('Built local invitation in dist/.');
