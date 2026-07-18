// The "Old Photographs" album, imported from the previous ASP.NET site
// (Areas/Moratuwa82Reunion/Views/Katubedda/Historical.cshtml).
//
// Photos are grouped the way the original page grouped them: each section had a
// label printed under its row of thumbnails. Sections without a title are ones
// the original page left unlabelled.
//
// `publicId` is the Cloudinary ID this album expects. `sourceFile` is the
// original file it came from, kept so the one-time upload is unambiguous — the
// old filenames are inconsistently cased and not URL-safe, so the public IDs
// here are normalized instead of copied verbatim.

import type { Album, AlbumSection } from './types.ts';

const sections: AlbumSection[] = [
  {
    title: 'Civil Engineering Batch Graduation — Partial',
    photos: [
      {
        publicId: 'historical/grad-by-p-frnando',
        sourceFile: 'grad by P Frnando.JPG',
        caption:
          'Civil engineering\n' +
          'Front row L-R: Ajith Madappuli, Ariyapala, Nedurana, Newton, Pradeep\n' +
          'Back row L-R: Denzil, Vidanarachchi, Darmadasa, Nonis and Sunil Santha',
      },
    ],
  },
  {
    title: 'Mechanical Engineering Batch',
    photos: [
      {
        publicId: 'historical/mech-batch-5-nov-1981',
        sourceFile: 'Mech Batch 5-Nov-1981.jpg',
        caption:
          'Mechanical engineering\n' +
          'Seated L-R: Rohitha Fernando, Kalinga Amarasighe, Prabath De Silva, Lekamlage Ariyadasa, ' +
          'Stanley Fernando, Harischandra Liyanagamage, M N Gunaratne, Rahula Attalage, ' +
          'Janath Chandrasekara, Sunil Mendis\n' +
          'Standing L-R: M R D Salgado, Abeywickreme Ariyadasa, Abeysinghe Bandara, Wimal Galappatti, ' +
          'D M Ranasinghe, Ananda W Rajakaruna, S Amithajothi, Raja Thilakaratne, K G Ranaweera, ' +
          'Hemantha Wijesekara',
      },
    ],
  },
  {
    title: 'Electrical Power Engineering Batch',
    photos: [
      {
        publicId: 'historical/power-batch-hd',
        sourceFile: 'Power Batch.png',
        caption:
          'Electrical Power Engineering Batch\n' +
          'Standing L-R: Udaya Ranawake, Udaya Annakkage, Priya Werahera, Sandaruwan Perera, ' +
          'Sunil Hapuarachchi, U I P Siriwardene, Vijithaweera Wickramasinghe, Ajith Wijenayake, ' +
          'Nihal Hettiarachchi, Nalin Pahalawatte, Jayalath Warnakulasuriya\n' +
          'Sitting L-R: Mr. R.A. Ponrajah, Dr Chelliah B Rajanathan, Mr. D.F.A. Jayakody, ' +
          'Prof Samarajeewa Karunaratne, Prof K K Y W Perera, Dr J Rohan Lucas, Dr Abhaya Induruwa, ' +
          'Dr W R Perera, Mr. P.D.P. Kumarasiri.',
      },
    ],
  },
  {
    title: 'Electronics and Telecommunication Engineering Batch',
    photos: [
      {
        publicId: 'historical/campusboys',
        sourceFile: 'Campusboys.jpg',
        caption:
          'Electronic and Telecommunication Engineering Batch\n' +
          'Standing L-R: Erica, Vijitha, Gayani, Samanmali, Champika, Manjula, Tamara, Vasantha, ' +
          'Deepa, Manora\n' +
          'Seated L-R: Vijith, Susith, Rupasinghe, Tissa, Jayatissa, Priyantha, Laksman, Ranatunge, ' +
          'Joachim Joseph, Gamini, Attanayake, Saman, Kanishka',
      },
      {
        publicId: 'historical/campusgirls',
        sourceFile: 'campusgirls.jpg',
        caption:
          'Electronic and Telecommunication Engineering Batch\n' +
          'Back row L-R: Susith, Thissa, Vijith, Jayatissa, Gamini, Rupasinghe, Priyantha, Lucky, ' +
          'Ranathunge, Joseph, Attanayake, Gamage, Kanishka\n' +
          'Front row L-R: Vijitha, Erica, Gayani, Champika, Wasantha, Manjula, Tamara, Samanmalee, ' +
          'Deepa, Manora',
      },
    ],
  },
  {
    title: 'Material/Mining/Chemical Engineering Batch',
    photos: [
      {
        publicId: 'historical/mmceng1',
        sourceFile: 'MMCEng1.jpg',
        caption:
          'Material/Mining/Chemical Batch\n' +
          'Back row L-R: Rodrigo, Atapattu, Egodawela, Dayananda, Rambanda, Sunil, Dhanapala, ' +
          'Wimaleswaren, Buruhanudeen?, Yogeswaren, Sumathipala, Galappaththi, Wickramasinghe\n' +
          'Front row L-R: Lalani, Gnana, Padma',
      },
    ],
  },
  {
    title: 'Materials Batch with Academic Staff',
    photos: [
      {
        publicId: 'historical/materials-batch-with-academic-staff',
        sourceFile: 'Materials Batch with acadamic staff.jpg',
        caption:
          'Materials Batch with academic staff\n' +
          'Standing L-R: Lalani Pigera, Chandra Galappaththi, Patrick Piyasena, Wimaleswaran, ' +
          'Rajaram, Dhanapala Weerasuriya, Mr Upul Gunawardane, Mr P Nanda, Yogeswaran, Don Rodrigo, ' +
          'Mr Sarath Mallawaarachchi, Pathma Samarakoon\n' +
          'Seated L-R: Mr Peter Knott, Prof Ayal Jayatilake, Dr Aruna Malewana, Prof Lal Fernando, ' +
          'Dr R I Marshall',
      },
    ],
  },
  {
    photos: [
      { publicId: 'historical/mmceng2', sourceFile: 'MMCEng2.jpg', caption: '' },
      { publicId: 'historical/ladies1', sourceFile: 'Ladies1.jpg', caption: '' },
      {
        publicId: 'historical/batchila',
        sourceFile: 'Batchila.jpg',
        caption: 'Graduation Day — Erica, Samanmalee, Sudharma, Pradeepa',
      },
      {
        publicId: 'historical/batchila2',
        sourceFile: 'Batchila2.jpg',
        caption: 'Civil Engineering Ladies L-R: Pradeepa, Sudarma, Sumithirai, Premini, Sriyani',
      },
      {
        publicId: 'historical/civil-ladies2',
        sourceFile: 'CivilLadies2.png',
        caption: 'Civil Engineering Ladies',
      },
    ],
  },
  {
    title: 'First Year Batch Trip',
    photos: [
      { publicId: 'historical/first-year-batch-trip', sourceFile: 'First year batch trip.jpg', caption: '' },
    ],
  },
  {
    title: 'Mech/Electronics Engineering Batch Trip',
    photos: [
      { publicId: 'historical/badulla', sourceFile: 'Badulla.jpg', caption: 'Waiting for the bus' },
      { publicId: 'historical/bandarawela', sourceFile: 'Bandarawela.jpg', caption: '' },
      {
        publicId: 'historical/nuwara-eliya',
        sourceFile: 'NuwaraEliya.jpg',
        caption: 'Pidurutalagala summit',
      },
      { publicId: 'historical/rathnapura', sourceFile: 'rathnapura.jpg', caption: 'At Eheliyagoda' },
      { publicId: 'historical/batch-trip-group', sourceFile: 'Batch trip group.jpg', caption: '' },
    ],
  },
  {
    title: 'Civil Engineering Batch Trip',
    photos: [
      {
        publicId: 'historical/civil-trip1',
        sourceFile: 'Civiltrip1.jpg',
        caption:
          'Civil Trip — Pradeep Perera, Nonis (tall guy), Nedurana (next to Nonis, only part of ' +
          'his face), Madupulli (in the front looking away), Newton, Vidanarachie',
      },
      {
        publicId: 'historical/civil-trip2',
        sourceFile: 'CivilTrip2.jpg',
        caption: 'Civil Trip — L-R Vidanarachie, Nonis, Newton, Nedurana, Ajith Madappulli',
      },
      {
        publicId: 'historical/civil-trip3',
        sourceFile: 'CivilTrip3.jpg',
        caption:
          'Civil Trip — L-R Nonis, Pradeep Perera, Nedurana (with back to camera), ' +
          'Ajith Madappulli, Vidanarachie',
      },
      {
        publicId: 'historical/civil-trip4',
        sourceFile: 'CivilTrip4.jpg',
        caption:
          'Civil Trip — Front: Pradeep Perera (handiya), Kolitha Weerasekera, Newton, ' +
          'Priyantha Mendis, Vitharana, Vidanarachie (behind Vitharana)\n' +
          'Second row: Amal Senevirathna\n' +
          'Last row: Keerthie Senevratne, Ruwan Weerasekara, Priyantha Perera',
      },
    ],
  },
  {
    photos: [
      {
        publicId: 'historical/graduation-day',
        sourceFile: 'Graduation Day.jpg',
        caption: 'Graduation Day — Ari, Rahula, Prabhath',
      },
      {
        publicId: 'historical/campus1',
        sourceFile: 'campus1.jpg',
        caption: 'Abeywickreme Ariyadasa, Rajakaruna, Salgado, Sarath Ranatunge',
      },
      {
        publicId: 'historical/campus2',
        sourceFile: 'campus2.jpg',
        caption:
          'Rohitha Swarna, Rodrigo, Dhrmadasa, Sarath Ranatunge, Abeywickreme Ariyadasa, Stanley, ' +
          'Rajakaruna, Tissa Samaratunge, Abeysinghe Bandara, Amarasinghe',
      },
      { publicId: 'historical/campus3', sourceFile: 'campus3.jpg', caption: '' },
    ],
  },
  {
    title:
      'Photos of our dearly missed batch mate Renuka Wasantha Attanayake, sent to us by his family',
    photos: [
      {
        publicId: 'historical/attanayake1',
        sourceFile: 'attanayake1.jpg',
        caption: 'Wasantha on Graduation Day',
      },
      {
        publicId: 'historical/attanayake2',
        sourceFile: 'attanayake2.jpg',
        caption:
          'Wasantha with family. His next eldest brother (Wasantha was the eldest), who was in ' +
          'Medical School at this time, is not in the photo',
      },
      {
        publicId: 'historical/attanayake3',
        sourceFile: 'attanayake3.jpg',
        caption: 'Wasantha with Udaya — they were in the same lab group in Part 1 and Part 2',
      },
      {
        publicId: 'historical/attanayake4',
        sourceFile: 'attanayake4.jpg',
        caption: 'Wasantha with Rupavahini colleagues',
      },
      {
        publicId: 'historical/attanayake5',
        sourceFile: 'attanayake5.jpg',
        caption: 'Wasantha with boarding mates',
      },
      {
        publicId: 'historical/attanayake6',
        sourceFile: 'attanayake6.jpg',
        caption: 'Wasantha with batch mates',
      },
      {
        publicId: 'historical/attanayake7',
        sourceFile: 'attanayake7.jpg',
        caption: 'Wasantha at Rupavahini',
      },
      {
        publicId: 'historical/attanayake8',
        sourceFile: 'attanayake8.jpg',
        caption: 'Wasantha at Rupavahini Tower',
      },
    ],
  },
  {
    photos: [
      {
        publicId: 'historical/photo-2014-02-02',
        sourceFile: '2-02-2014 9;41;58 AM.jpg',
        caption: '',
      },
      {
        publicId: 'historical/ohiya-railway-tunnel-1980',
        sourceFile: 'At Ohiya Railway tunnel, on the way to Worlds End 1980.jpg',
        caption: 'At Ohiya railway tunnel, on the way to World’s End, 1980',
      },
      { publicId: 'historical/bus', sourceFile: 'Bus.jpg', caption: 'Bus' },
      { publicId: 'historical/fake-smokers', sourceFile: 'Fake smokers.jpg', caption: 'Fake smokers' },
      {
        publicId: 'historical/hike-bit-tired',
        sourceFile: 'hike bit tired.jpg',
        caption: 'A bit tired after the hike',
      },
      { publicId: 'historical/mihintale', sourceFile: 'Mihintale.jpg', caption: 'Mihintale' },
      { publicId: 'historical/polonnaruwa', sourceFile: 'Polonnaruwa.jpg', caption: 'Polonnaruwa' },
      {
        publicId: 'historical/puttalam-cement',
        sourceFile: 'Puttalam Cement.jpg',
        caption: 'Puttalam Cement',
      },
      { publicId: 'historical/sri-pada2', sourceFile: 'Sri Pada2.jpg', caption: 'At Sri Pada' },
      { publicId: 'historical/sri-pada', sourceFile: 'SriPada.jpg', caption: 'At Sri Pada' },
    ],
  },
  {
    photos: [
      {
        publicId: 'historical/tissa-finland',
        sourceFile: 'Tissa- Finland.jpg',
        caption: 'Tissa, Ranatunga and Lucky in Finland, 1983',
      },
    ],
  },
];

const album: Album = {
  slug: 'historical',
  title: 'Old Photographs',
  summary: 'Batch photos, trips and graduation from our years at Katubedda.',
  cover: 'site/sumanadasa-hall',
  sourceDir: '../LionknightWeb/LionknightWeb/Moratuwa82Reunion/Historical',
  intro:
    'Please send any old photographs that you would like to share with your batchmates, ' +
    'or new photographs of your family to be published, to Kanishka at ken.abeynayake@gmail.com — ' +
    'and make sure you get a response from him (the email gateway blocks some photographs). ' +
    'If you do not get a response in two days, send an email without the picture and he will ' +
    'give you an alternate way of sending them.',
  closing:
    'We are especially looking for the Civil batch photo and the full batch photo. ' +
    'A higher resolution Electronics photo would be great too.',
  sections,
};

export default album;
