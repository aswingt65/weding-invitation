import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
await fs.mkdir(root, { recursive: true });
await fs.cp('reference', root, { recursive: true });
await fs.copyFile('src/index.html', path.join(root, 'index.html'));
await fs.copyFile('src/invitation.js', path.join(root, '_next/static/chunks/app/page-d58aa943c3352356.js'));
await fs.copyFile('src/styles.css', path.join(root, '_next/static/css/ca116a08f154ead5.css'));
await fs.cp('src/assets', path.join(root, 'assets'), { recursive: true });
console.log('Built local invitation in dist/.');
