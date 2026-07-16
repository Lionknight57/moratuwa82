// One-time uploader for member portraits.
//
//   npm run upload-photos -- --dry-run
//   npm run upload-photos
//
// Reads src/data/member-photos.ts and uploads each sourceFile under its
// publicId. Same idempotent behaviour as the album uploader. Portraits live in
// the Moratuwa82Reunion root of the LionknightWeb checkout.

import { existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { v2 as cloudinary } from 'cloudinary';
import { memberPhotos } from '../src/data/member-photos.ts';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const overwrite = args.includes('--overwrite');

const sourceDir = process.env.SOURCE_DIR
  ? resolve(process.env.SOURCE_DIR)
  : resolve(process.cwd(), '../LionknightWeb/LionknightWeb/Moratuwa82Reunion');

function fail(m: string): never {
  console.error(`\n✗ ${m}\n`);
  process.exit(1);
}

if (!existsSync(sourceDir)) fail(`Source directory not found:\n  ${sourceDir}`);

const missing = memberPhotos.filter((p) => !existsSync(join(sourceDir, p.sourceFile)));
if (missing.length) fail(`${missing.length} portrait(s) missing:\n` + missing.map((p) => '  ' + p.sourceFile).join('\n'));

const bytes = memberPhotos.reduce((n, p) => n + statSync(join(sourceDir, p.sourceFile)).size, 0);
console.log(`Portraits: ${memberPhotos.length} (${(bytes / 1024 / 1024).toFixed(1)} MB)`);
console.log(`Source:    ${sourceDir}`);

if (dryRun) {
  console.log('\nDry run — nothing uploaded:\n');
  for (const p of memberPhotos) console.log(`  ${p.sourceFile.padEnd(28)} -> ${p.publicId}   (${p.name})`);
  console.log('\n✓ All portraits found.');
  process.exit(0);
}

const cloudName = process.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;
if (!cloudName || !apiKey || !apiSecret) fail('Missing Cloudinary credentials in .env');

cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret, secure: true });

let ok = 0;
let failed = 0;
for (const [i, p] of memberPhotos.entries()) {
  const n = `[${String(i + 1).padStart(3)}/${memberPhotos.length}]`;
  try {
    const res = await cloudinary.uploader.upload(join(sourceDir, p.sourceFile), {
      public_id: p.publicId,
      use_filename: false,
      unique_filename: false,
      overwrite,
      resource_type: 'image',
    });
    ok++;
    console.log(`${n} ✓ ${res.public_id}`);
  } catch (err) {
    failed++;
    console.error(`${n} ✗ ${p.publicId} — ${(err as Error).message}`);
  }
}
console.log(`\nUploaded/confirmed ${ok}, failed ${failed}.`);
if (failed) process.exit(1);
