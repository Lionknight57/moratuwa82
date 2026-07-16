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
// `note` is optional and shows after the name, for anything worth recording
// (specialisation, "overseas", a maiden name people would recognise).

export type Member = {
  name: string;
  note?: string;
};

export type Discipline = {
  id: string;
  label: string;
  members: Member[];
};

export const contactEmail = 'ken.abeynayake@gmail.com';

export const disciplines: Discipline[] = [
  { id: 'civil', label: 'Civil', members: [] },
  { id: 'electrical', label: 'Electrical', members: [] },
  { id: 'electronic', label: 'Electronic', members: [] },
  { id: 'mechanical', label: 'Mechanical', members: [] },
  { id: 'materials-chemical', label: 'Materials / Chemical', members: [] },
];

export const totalMembers = disciplines.reduce((n, d) => n + d.members.length, 0);
