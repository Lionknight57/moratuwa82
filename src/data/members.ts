// The batch member list, rebuilt from memory.
//
// The previous site kept this in a MongoDB database that didn't survive the
// move. Kanishka is writing the list out again from memory — about three
// quarters of the batch — and the page asks readers to correct it and supply
// the rest. Add a member by putting them in the right discipline below; the
// page and the counts follow automatically.
//
// Because these are recalled rather than sourced, expect misspellings and
// people filed under the wrong discipline. Corrections from batchmates beat
// anything remembered here.
//
// Names are recorded verbatim, including the second surname some members are
// listed under in brackets — that is how they were supplied and it isn't for us
// to decide which name someone goes by. `note` carries anything that isn't part
// of the name, currently only "deceased".
//
// ORDER DOESN'T MATTER HERE. Each section is sorted by surname on the way out,
// so add people wherever it's convenient. Set `sortAs` on anyone the surname
// rule gets wrong.

export type Member = {
  name: string;
  note?: string;
  /** Override the surname used for sorting, when the rule below guesses wrong. */
  sortAs?: string;
};

export type Discipline = {
  id: string;
  label: string;
  members: Member[];
};

export const contactEmail = 'ken.abeynayake@gmail.com';

// Lowercase name particles that belong with the surname: "Prabath de Silva"
// files under "de Silva", not "Silva".
const PARTICLE = /^(de|van|von|der|den|da|del|di|la|le)$/;

/**
 * The surname to alphabetise by: the last word of the name, plus any lowercase
 * particle in front of it. Bracketed second surnames are ignored — someone
 * listed as "Tamara Ginige (Senanayake)" files under Ginige.
 */
function surnameOf(m: Member): string {
  if (m.sortAs) return m.sortAs;
  const parts = m.name.replace(/\s*\([^)]*\)/g, '').trim().split(/\s+/);
  let i = parts.length - 1;
  if (i > 0 && PARTICLE.test(parts[i - 1])) i--;
  return parts.slice(i).join(' ');
}

const bySurname = (a: Member, b: Member) =>
  surnameOf(a).localeCompare(surnameOf(b), 'en', { sensitivity: 'base' }) ||
  a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });

const roster: Discipline[] = [
  {
    id: 'civil',
    label: 'Civil',
    members: [
      { name: 'Piyadasa Amaratunga' },
      { name: 'Shanmugalingam Bhuvendralingam' },
      { name: 'Ariyapala Fernando' },
      { name: 'Lionel Fernando' },
      { name: 'Pradeepa Fernando (Wijesiriwardene)' },
      { name: 'Rohitha Fernando' },
      { name: 'Priyantha Goonarathne', note: 'deceased' },
      { name: 'Premini Gunawardene' },
      { name: 'Milroy Gunawardene' },
      { name: 'Hemamali Gajadeera' },
      // Not the same person as Gnana in Materials / Chemical.
      { name: 'Keerthi Gnanaprakasam' },
      { name: 'Sumi Prabakharan (Maheshwaran)' },
      { name: 'Siri Dissanayake' },
      { name: 'Sarath Jayawardene' },
      { name: 'Sriyani Karunatilleke' },
      { name: 'Denzil Lokuliyana' },
      { name: 'Ajith Madappuli', note: 'deceased' },
      { name: 'Priyantha Mendis' },
      { name: 'Ranil Nedurana' },
      { name: 'Geeganage Newton' },
      { name: 'Nonis' },
      { name: 'Anura Nanayakkara' },
      { name: 'Pradeep Perera' },
      { name: 'Priyantha' },
      { name: 'Nimal Pushpakumara' },
      { name: 'Sunil Ratnayake' },
      { name: 'Rayan' },
      // Three Senevirathnes in the batch: Amal and Keerthi here, Vijith in Electronic.
      { name: 'Amal Senevirathne' },
      { name: 'Keerthi Senevirathne' },
      { name: 'Shanmuganathan' },
      { name: 'Sumitha Sumanaweera' },
      { name: 'Rohitha Swarna' },
      { name: 'Sundararaju' },
      { name: 'Chandana Vidanarachchi' },
      { name: 'Vinotharajah' },
      { name: 'Nihal Vitharana' },
      { name: 'Kolitha Weerasekera' },
      { name: 'Ruwan Weerasekera' },
      { name: 'Ranjith Wijegunasekera' },
      { name: 'Dhamadasa Wijenayake' },
      { name: 'Hemal Wijayratne' },
      { name: 'Senaka Wijesinghe' },
    ],
  },
  {
    id: 'electrical',
    label: 'Electrical',
    members: [
      { name: 'Udaya Annakkage' },
      { name: 'Sunil Hapuarachchi' },
      { name: 'Nihal Hettiarachchi' },
      { name: 'Ranjith Jayawardene' },
      { name: 'Kusumalatha' },
      { name: 'Nalin Pahalawatte' },
      { name: 'Sandaruwan Perera' },
      { name: 'Udaya Ranawaka' },
      { name: 'Uthpala Siriwardene' },
      { name: 'Jayalath Warnakulasuriya' },
      { name: 'Priya Werahera' },
      { name: 'Vijithaweera Wickramasinghe' },
      { name: 'Kingsley Wijenayake' },
      { name: 'Ajith Wijenayake' },
      { name: 'Lal Wijewardene' },
    ],
  },
  {
    id: 'electronic',
    label: 'Electronic',
    members: [
      { name: 'Kanishka Abeynayake' },
      { name: 'Renuka Wasantha Attanayake', note: 'deceased' },
      { name: 'Samanmali Dodangoda' },
      { name: 'Susith Fernando' },
      { name: 'Gayani Rupasinghe Gamage' },
      { name: 'Saman Gamage' },
      { name: 'Tamara Ginige (Senanayake)' },
      { name: 'Champika Goonawardene' },
      { name: 'Hettige Jayatissa' },
      { name: 'Joachim Joseph' },
      { name: 'Lakshman Joseph' },
      { name: 'Gamini Karunarathne' },
      { name: 'Deepa Liyanagama (Sederage)' },
      { name: 'Vasantha Liyanage' },
      { name: 'Priyantha Perera' },
      { name: 'Vijitha Ratnayake (Dodampe Gamage)' },
      { name: 'Sarath Ranatunge' },
      { name: 'Daya Rupasinghe' },
      { name: 'Tissa Samaratunga' },
      { name: 'Vijith Seneviratne' },
      { name: 'Erica Silva' },
      { name: 'Mohan Silva' },
      { name: 'Manjula Wickramaratne' },
    ],
  },
  {
    id: 'mechanical',
    label: 'Mechanical',
    members: [
      { name: 'Abeysinghe Bandara' },
      { name: 'Ariyadasa Abeywickrama' },
      { name: 'Lekamge Ariyadasa' },
      { name: 'Kalinga Amarasinghe' },
      { name: 'S Amithajothi' },
      { name: 'Rahula Attalage' },
      { name: 'Janath Chandrasekera' },
      { name: 'Prabath de Silva' },
      { name: 'Stanley Fernando', note: 'deceased' },
      // Not the same person as Chandra Galappaththi in Materials / Chemical.
      { name: 'Wimal Galappaththi' },
      { name: 'Nimal Gunarathne' },
      { name: 'Jayantha Gunathilake' },
      { name: 'Harischandra Liyanagamage' },
      { name: 'Sunil Mendis' },
      { name: 'Lalith Munasinghe' },
      { name: 'D.M. Ranasinghe' },
      { name: 'Gamini Ranaweera' },
      { name: 'Ananda Rajakaruna' },
      { name: 'Ranjith Salgado' },
      { name: 'Jinasiri Samarakoon' },
      { name: 'Seram' },
      { name: 'Jayanath Weerasooriya' },
      { name: 'Hemantha Wijesekera' },
    ],
  },
  {
    id: 'materials-chemical',
    label: 'Materials / Chemical',
    members: [
      { name: 'Dudley Atapattu' },
      { name: 'Abdul Buruhanudeen', note: 'deceased' },
      { name: 'A R Dayananda' },
      { name: 'Egodawela' },
      { name: 'Sunil Fonseka' },
      // Not the same person as Wimal Galappaththi in Mechanical. Confirmed by
      // Kanishka — two people who share a surname, not a duplicate to be merged.
      { name: 'Chandra Galappaththi' },
      // Not a short form of Keerthi Gnanaprakasam in Civil. Confirmed by
      // Kanishka — two different people.
      { name: 'Gnana' },
      { name: 'Lalani Kuruppu (Pigera)' },
      { name: 'Dayapani Patrick Piyasena' },
      { name: 'Rajaram', note: 'deceased' },
      { name: 'Rambanda', note: 'deceased' },
      { name: 'Don Dayananda Rodrigo' },
      { name: 'Padma Samarakoon' },
      { name: 'Sivasakthy' },
      { name: 'Kuma Sumathipala' },
      { name: 'Dhanapala Weerasuriya' },
      { name: 'Victor Wickramasinghe', note: 'deceased' },
      { name: 'Wimaleswaren' },
      { name: 'Yogeswaren' },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    // This Fonseka is not Sunil Fonseka in Materials / Chemical — different
    // people. Confirmed by Kanishka; not a duplicate to be merged.
    members: [{ name: 'Alwis' }, { name: 'Fonseka' }],
  },
];

/** Each discipline with its members alphabetised by surname. */
export const disciplines: Discipline[] = roster.map((d) => ({
  ...d,
  members: [...d.members].sort(bySurname),
}));

export const totalMembers = disciplines.reduce((n, d) => n + d.members.length, 0);
