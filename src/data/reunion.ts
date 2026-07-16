// 50th Anniversary Reunion, 13 June 2027.
//
// Edit the figures here and the page recalculates: every total, the discount and
// the net per-person costs are derived, never typed twice. Committee updates go
// in `updates` (newest first).
//
// Source: organizing committee circulars, latest cost estimate 27 June 2026.

export const event = {
  title: '50th Anniversary Reunion',
  subtitle: 'Celebrating 50 years since the 1977 intake — 1977–1981 Engineering batch, University of Moratuwa',
  mainDate: '13 June 2027',
  span: '12–14 June 2027 (Saturday to Monday)',
  venue: 'Centauria Lake Resort, Udawalawe',
  nights: 'Two nights, three days — full board',
  departure:
    'We travel together in two luxury buses, leaving UoM around 8:30 am on Saturday 12 June 2027 ' +
    'and reaching Udawalawe around noon. The committee will ask the university about parking for ' +
    'those driving to UoM.',
};

export type Day = {
  date: string;
  weekday: string;
  items: string[];
};

export const itinerary: Day[] = [
  {
    date: '12 June 2027',
    weekday: 'Saturday',
    items: [
      'Depart UoM around 8:30 am by luxury bus; arrive Udawalawe around 12:00 noon.',
      'Check in at 12:00 noon, followed by lunch.',
      'Udawalawe safari by jeep, 2:00 pm – 6:30 pm.',
      'Evening bonfire with BBQ and a Calypso band — plenty of free time to catch up over hot beverages and singing.',
    ],
  },
  {
    date: '13 June 2027',
    weekday: 'Sunday',
    items: [
      'Breakfast, then free time until lunch — conversation, games, swimming in the hotel grounds.',
      'Meet at teatime, and cut the 50th Anniversary cake.',
      'From tea until dinner: karaoke, dancing and hot beverages. Swimming for those who want it.',
    ],
  },
  {
    date: '14 June 2027',
    weekday: 'Monday',
    items: [
      'Breakfast, then leave the hotel around 10:00 am.',
      'Ridiyagama safari, botanical garden and birds park.',
      'Late lunch on the road, then return to UoM.',
    ],
  },
];

export const nearby = [
  'Udawalawe safari',
  'Bird sanctuaries',
  'Botanical garden',
  'Ridiyagama safari',
];

export const atVenue = ['Indoor games', 'Swimming', 'Bonfire', 'Calypso music and singing'];

// --- Costs (estimated as of 27 June 2026) -----------------------------------

export type RoomType = {
  id: string;
  label: string;
  detail: string;
  accommodation: number;
  pax: number;
};

// Accommodation is per person, two nights, full board.
export const roomTypes: RoomType[] = [
  {
    id: 'double',
    label: 'Double / twin sharing',
    detail: '44 couples in 44 rooms, plus 12 people twin sharing in 6 rooms',
    accommodation: 24400,
    pax: 100,
  },
  {
    id: 'triple',
    label: 'Triple room',
    detail: '15 people in 5 rooms',
    accommodation: 20000,
    pax: 15,
  },
];

export type Extra = { label: string; amount: number; optional?: boolean };

// Charged per person on top of accommodation, regardless of room type.
export const extras: Extra[] = [
  { label: 'Bus fare', amount: 3500 },
  {
    label: 'Additional BBQ on the first night, Udawalawe safari, Ridiyagama safari, botanical garden and birds park',
    amount: 6000,
  },
  { label: 'Soft bites, soft drinks and gifts for activities', amount: 1500 },
  { label: 'Calypso band', amount: 250 },
  { label: 'T-shirt', amount: 3000, optional: true },
  { label: 'Lunch on the return journey', amount: 500 },
];

export const sponsorshipsLkr = 2316400;

export const costsAsOf = '27 June 2026';

// --- Derived ----------------------------------------------------------------

export const extrasTotal = extras.reduce((n, e) => n + e.amount, 0);

/** Full per-person cost for a room type, including the optional T-shirt. */
export const perPerson = (room: RoomType) => room.accommodation + extrasTotal;

export const totalPax = roomTypes.reduce((n, r) => n + r.pax, 0);

export const grandTotal = roomTypes.reduce((n, r) => n + perPerson(r) * r.pax, 0);

/** Sponsorship money spread equally across every participant. */
export const discountPerPerson = Math.round(sponsorshipsLkr / totalPax);

export const netPerPerson = (room: RoomType) => perPerson(room) - discountPerPerson;

// --- Committee updates (newest first) ---------------------------------------

export type Update = { date?: string; body: string[] };

export const updates: Update[] = [
  {
    date: '27 June 2026',
    body: [
      'Detailed cost analysis circulated (the figures on this page).',
      'Sponsorships confirmed to date: Rs 2,316,400.',
      'Account details for sponsorship payments will be shared first. All other payments will be collected three months before the reunion.',
    ],
  },
  {
    date: '18 June 2026',
    body: [
      '60 batchmates confirmed, totalling 107 participants. 21 batchmates will not attend, and 21 were still to confirm (4 in Sri Lanka, 17 overseas).',
      'The confirmation deadline was extended to 21 June 2026.',
      'Rs 1,774,000 received as sponsorships — a big thank you to those who contributed.',
      'The organizing team will visit the venue just after 21 June to finalize formalities, after which budgetary details will be shared with the group.',
    ],
  },
  {
    body: [
      'Initial summary: dates set for 12, 13 and 14 June 2027 at Centauria Lake Resort, Udawalawe.',
      '28 batchmates confirmed, totalling 50 participants, against a first deadline of 15 June 2026.',
      'Rs 510,000 and USD 700 confirmed as sponsorships.',
    ],
  },
];
