// The "Reunion 2024" album — the 47th batch reunion at the Kithulgala Kanda
// Mountain Resort on 21 December 2024.
//
// Built by hand from the WhatsApp photos on the Seagate drive. The filenames
// carry the date they were *sent* (a few went out the next morning), not the
// date they were taken, so the album order follows the day itself: the
// gathering under the trees, the group photographs, then lunch and the band.
//
// sourceDir points at the external drive. It is not a permanent home — pass
// SOURCE_DIR=<path> to `npm run upload` if the originals move.

import type { Album } from './types.ts';

const album: Album = {
  slug: 'reunion2024',
  title: 'Reunion 2024',
  summary: 'The 47th batch reunion at Kithulgala Kanda Mountain Resort, 21 December 2024.',
  cover: 'reunion2024/batch-group',
  intro:
    'The batch met at the Kithulgala Kanda Mountain Resort on 21 December 2024 — ' +
    'the 47th year since 1977. A long table under the rainforest canopy, the ' +
    'group photographs on the terrace, and lunch with a band above the valley.',
  sourceDir: 'Z:/Seagate',
  sections: [
    {
      title: 'Under the trees',
      photos: [
        {
          publicId: 'reunion2024/table-1',
          sourceFile: 'IMG-20241221-WA0012.jpg',
          caption: 'The long table under the canopy.',
        },
        {
          publicId: 'reunion2024/table-2',
          sourceFile: 'IMG-20241221-WA0014.jpg',
          caption: '',
        },
        {
          publicId: 'reunion2024/table-3',
          sourceFile: 'IMG-20241221-WA0016.jpg',
          caption: '',
        },
        {
          publicId: 'reunion2024/gathering-1',
          sourceFile: 'IMG-20241221-WA0018.jpg',
          caption: '',
        },
        {
          publicId: 'reunion2024/gathering-2',
          sourceFile: 'IMG-20241221-WA0020.jpg',
          caption: 'The pavilion by the stream.',
        },
        {
          publicId: 'reunion2024/cake',
          sourceFile: 'IMG-20241221-WA0008.jpg',
          caption: 'The cake: “UOM 1977–1981, 47th Batch Reunion”.',
        },
      ],
    },
    {
      title: 'The group photographs',
      photos: [
        {
          publicId: 'reunion2024/batch-group',
          sourceFile: 'IMG-20241222-WA0001.jpg',
          caption: 'The batch and their families outside the resort.',
        },
        {
          publicId: 'reunion2024/before-the-photo',
          sourceFile: 'IMG-20241222-WA0002.jpg',
          caption: 'Gathering for the group photograph.',
        },
        {
          publicId: 'reunion2024/men-group',
          sourceFile: 'IMG-20241222-WA0003.jpg',
          caption: '',
        },
        {
          publicId: 'reunion2024/ladies-group',
          sourceFile: 'IMG-20241222-WA0004.jpg',
          caption: '',
        },
      ],
    },
    {
      title: 'Lunch and music',
      photos: [
        {
          publicId: 'reunion2024/lunch-1',
          sourceFile: 'IMG-20241222-WA0006.jpg',
          caption: 'Lunch, with the hills through the glass.',
        },
        {
          publicId: 'reunion2024/lunch-2',
          sourceFile: 'IMG-20241222-WA0007.jpg',
          caption: '',
        },
        {
          publicId: 'reunion2024/lunch-3',
          sourceFile: 'IMG-20241222-WA0009.jpg',
          caption: '',
        },
        {
          publicId: 'reunion2024/band',
          sourceFile: 'IMG-20241222-WA0008.jpg',
          caption: 'The baila band.',
        },
        {
          publicId: 'reunion2024/dancing',
          sourceFile: 'IMG-20241222-WA0005.jpg',
          caption: '',
        },
      ],
    },
  ],
};

export default album;
