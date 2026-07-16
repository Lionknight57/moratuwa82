// One-time uploader for album photos.
//
// Reads the sourceFile -> publicId mapping straight out of the album data, so
// the album file stays the single source of truth. Safe to re-run: photos that
// already exist on Cloudinary are left alone unless you pass --overwrite.
//
//   npm run upload:historical -- --dry-run    # check first, uploads nothing
//   npm run upload:historical
//
// Requires CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in .env (see
// .env.example). The npm script loads .env for you.

import { existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { v2 as cloudinary } from 'cloudinary';
import { sections } from '../src/data/albums/historical.ts';

// Where the originals live. Override with SOURCE_DIR if your checkout differs.
const DEFAULT_SOURCE_DIR = resolve(
  process.cwd(),
  '../LionknightWeb/LionknightWeb/Moratuwa82Reunion/Historical',
);

const sourceDir = process.env.SOURCE_DIR
  ? resolve(process.env.SOURCE_DIR)
  : DEFAULT_SOURCE_DIR;

const dryRun = process.argv.includes('--dry-run');
const overwrite = process.argv.includes('--overwrite');

const photos = sections.flatMap((s) => s.photos);

function fail(message: string): never {
  console.error(`\n✗ ${message}\n`);
  process.exit(1);
}

// Verify every source file resolves before uploading anything, so a typo fails
// fast instead of half-way through 43 uploads.
if (!existsSync(sourceDir)) {
  fail(`Source directory not found:\n  ${sourceDir}\nSet SOURCE_DIR to point at it.`);
}

const missing = photos.filter((p) => !existsSync(join(sourceDir, p.sourceFile)));
if (missing.length > 0) {
  fail(
    `${missing.length} source file(s) not found in ${sourceDir}:\n` +
      missing.map((p) => `  ${p.sourceFile}`).join('\n'),
  );
}

const totalBytes = photos.reduce((n, p) => n + statSync(join(sourceDir, p.sourceFile)).size, 0);
console.log(`Source:  ${sourceDir}`);
console.log(`Photos:  ${photos.length} (${(totalBytes / 1024 / 1024).toFixed(1)} MB)`);

if (dryRun) {
  console.log('\nDry run — nothing will be uploaded. Planned mapping:\n');
  for (const p of photos) console.log(`  ${p.sourceFile.padEnd(56)} -> ${p.publicId}`);
  console.log('\n✓ All source files found. Re-run without --dry-run to upload.');
  process.exit(0);
}

const cloudName = process.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  fail(
    'Missing Cloudinary credentials. Copy .env.example to .env and set\n' +
      '  PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET\n' +
      'from your Cloudinary dashboard.',
  );
}

cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret, secure: true });

let uploaded = 0;
let skipped = 0;
let failed = 0;

for (const [i, photo] of photos.entries()) {
  const n = `[${String(i + 1).padStart(2)}/${photos.length}]`;
  try {
    const res = await cloudinary.uploader.upload(join(sourceDir, photo.sourceFile), {
      public_id: photo.publicId,
      // The public IDs are deliberate; never let Cloudinary derive its own.
      use_filename: false,
      unique_filename: false,
      overwrite,
      resource_type: 'image',
    });
    // Without overwrite, an existing asset comes back untouched rather than erroring.
    const existed = !overwrite && res.created_at && new Date(res.created_at) < new Date(Date.now() - 60_000);
    if (existed) {
      skipped++;
      console.log(`${n} = ${photo.publicId} (already there)`);
    } else {
      uploaded++;
      console.log(`${n} ✓ ${photo.publicId}`);
    }
  } catch (err) {
    failed++;
    console.error(`${n} ✗ ${photo.publicId} — ${(err as Error).message}`);
  }
}

console.log(`\nUploaded ${uploaded}, already present ${skipped}, failed ${failed}.`);
if (failed > 0) process.exit(1);
console.log('Done. The album at /gallery/historical should now render.');
