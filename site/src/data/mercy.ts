// Mercy Health Clinic of North Wake — the clinic's facts, as published on its own
// site. The clinic is the authority: re-check these against mercyhealthnw.org
// whenever its schedule changes (hours + holiday closures are time-sensitive).
// Address is NOT here — the clinic meets at North Wake Church, so pages use
// BUSINESS (business.ts) for it.
//
// LAST VERIFIED against mercyhealthnw.org (Home, About, Volunteer, Partner,
// Contact): 2026-09-23.
// UPDATE OWNER: not yet decided (see state doc).

export const MERCY = {
  name: "Mercy Health Clinic of North Wake",
  siteUrl: "https://www.mercyhealthnw.org/",
  siteLabel: "mercyhealthnw.org",
  volunteerUrl: "https://www.mercyhealthnw.org/volunteer/",
  partnerUrl: "https://www.mercyhealthnw.org/partner/",
  donateUrl: "https://www.paypal.com/donate/?hosted_button_id=THURN7FA7YKUU",
  // No public patient-portal link exists on the clinic's site — add it here (and a
  // "Book an appointment" hero button) once the clinic provides it.
  portalUrl: "",

  phone: "(919) 867-4237",
  phoneTel: "+19198674237",
  fax: "(919) 229-0442",

  when: "2nd & 4th Tuesdays · 6:00–8:30 pm",
  closures: "the fourth Tuesday of November and December",
  who: "Adults 18+ · household income below 200% FPL",
};
