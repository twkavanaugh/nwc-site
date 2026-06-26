// SINGLE SOURCE OF TRUTH for NAP + contact + canonical URL. Import everywhere.
// Never hardcode these values in a page, layout, or schema.

export interface Business {
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  email: string;
  url: string;
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
};
