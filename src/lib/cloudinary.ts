// Cloudinary URL helpers.
//
// Set your cloud name in .env (see .env.example). During local dev without an
// account, the default "demo" cloud serves Cloudinary's public sample images so
// the site still renders.
const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';

const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

type ImgOpts = {
  width?: number;
  height?: number;
  // crop mode: 'fill' keeps aspect + crops, 'fit' letterboxes, 'scale' distorts
  crop?: 'fill' | 'fit' | 'scale' | 'thumb';
};

/**
 * Build an optimized Cloudinary delivery URL for a given public ID.
 * Always requests automatic format (WebP/AVIF) and automatic quality.
 */
export function cldUrl(publicId: string, opts: ImgOpts = {}): string {
  const t: string[] = ['f_auto', 'q_auto'];
  if (opts.width) t.push(`w_${opts.width}`);
  if (opts.height) t.push(`h_${opts.height}`);
  if (opts.crop) t.push(`c_${opts.crop}`);
  else if (opts.width || opts.height) t.push('c_fill');
  return `${BASE}/${t.join(',')}/${publicId}`;
}

/**
 * Build a srcset string across common widths for responsive delivery.
 */
export function cldSrcSet(publicId: string, widths = [400, 800, 1200, 1600]): string {
  return widths
    .map((w) => `${cldUrl(publicId, { width: w })} ${w}w`)
    .join(', ');
}
