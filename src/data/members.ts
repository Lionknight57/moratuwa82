// The batch member list, rebuilt from scratch.
//
// The previous site kept this in a MongoDB database that didn't survive the
// move, so every section starts empty and fills up as people send their details
// in. Add a member by putting them in the right discipline below — the page and
// the counts follow automatically.
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
