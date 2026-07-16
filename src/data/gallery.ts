// The photo gallery manifest — the "Recent" grid on /gallery.
//
// Each entry is a Cloudinary public ID (the path you get after uploading, minus
// the file extension) plus a caption. To add photos: upload them to Cloudinary,
// then paste their public IDs here. No code changes needed beyond this list.
//
// These are still Cloudinary's stock sample images, held as placeholders until
// real batch photos replace them — hence the captions. Swap the publicId and the
// caption together; a real photo should never keep a "coming soon" caption.

export type Photo = {
  publicId: string;
  caption: string;
};

export const photos: Photo[] = [
  { publicId: 'samples/people/boy-snow-hoodie', caption: 'coming soon...' },
  { publicId: 'samples/landscapes/nature-mountains', caption: 'coming soon...' },
  { publicId: 'samples/people/smiling-man', caption: 'coming soon...' },
];
