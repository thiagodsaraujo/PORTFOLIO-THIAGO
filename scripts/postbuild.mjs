import { cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

await mkdir('dist/attached_assets', { recursive: true });

if (existsSync('attached_assets')) {
  await cp('attached_assets', 'dist/attached_assets', { recursive: true });
}

for (const file of ['script.js', 'project-detail.js']) {
  if (existsSync(file)) {
    await cp(file, `dist/${file}`);
  }
}
