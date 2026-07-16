// The photo gallery manifest.
//
// Each entry is a Cloudinary public ID (the path you get after uploading, minus
// the file extension) plus a caption. To add photos: upload them to Cloudinary,
// then paste their public IDs here. No code changes needed beyond this list.
//
// The defaults below use Cloudinary's public "demo" sample images so the gallery
// renders before you've uploaded anything of your own.

export type Photo = {
  publicId: string;
  caption: string;
};

export const photos: Photo[] = [
  { publicId: 'samples/people/boy-snow-hoodie', caption: 'Batch trip, 1980' },
  { publicId: 'samples/people/kitchen-bar', caption: 'Common room evenings' },
  { publicId: 'samples/landscapes/nature-mountains', caption: 'The old campus view' },
  { publicId: 'samples/landscapes/beach-boat', caption: 'Farewell outing' },
  { publicId: 'samples/people/smiling-man', caption: 'Reunion 2015' },
  { publicId: 'samples/food/spices', caption: 'The famous canteen' },
];
