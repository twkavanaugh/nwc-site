// SINGLE SOURCE OF TRUTH for the church's canonical facts — NAP, contact, URL,
// worship service times, giving + maps links. Import everywhere. Never hardcode
// these values in a page, layout, or schema.

export interface Business {
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  email: string;
  url: string;
  serviceTimes: string[]; // worship service start times, in order
  givingUrl: string;
  mapsUrl: string;
}

export const BUSINESS: Business = {
  name: 'North Wake Church',
  streetAddress: '1212 S Main St',
  city: 'Wake Forest',
  state: 'NC',
  postalCode: '27587',
  phone: '(919) 556-1546',
  email: 'office@northwake.com',
  url: 'https://northwake.com', // CONFIRM later — placeholder canonical
  serviceTimes: ['9:00 AM', '10:45 AM'], // CONFIRMED with church 2026-06-28 (was 9 & 11 on homepage — 11 was an error)
  givingUrl: 'https://onrealm.org/NorthWake/-/form/give/now',
  mapsUrl: '', // TODO: add real directions URL once street address is church-verified
};
