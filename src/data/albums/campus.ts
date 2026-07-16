// The "Old Campus Photos" album — the Katubedda campus over the years.
//
// Not imported from an old view; built by hand. Add photos to the section below
// as { publicId, sourceFile, caption }. Upload with: npm run upload -- campus.

import type { Album } from './types.ts';

const album: Album = {
  slug: 'campus',
  title: 'Old Campus Photos',
  summary: 'The Katubedda campus, where our years began.',
  cover: 'campus/uom-entrance',
  sourceDir: '../LionknightWeb/LionknightWeb/Moratuwa82Reunion/Oldcampus',
  sections: [
    {
      photos: [
        {
          publicId: 'campus/uom-entrance',
          sourceFile: '85489aff-4ee0-4283-b619-eb429747045a.png',
          caption: 'Near the front of the campus',
        },
      ],
    },
  ],
};

export default album;
