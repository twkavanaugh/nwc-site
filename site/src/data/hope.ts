// The HOPE Counseling Center — facts as published on its own site. HOPE is the
// authority: re-check these against thehopecounselingcenter.org each quarter
// (state doc → QUARTERLY MAINTENANCE). Address is NOT here — HOPE meets at North
// Wake Church, so pages use BUSINESS (business.ts) for it.
//
// LAST VERIFIED against thehopecounselingcenter.org (Home, About, Services, FAQ,
// Contact, Donate): 2026-09-24.
//
// OPEN WITH HOPE: minimum age. Their Services page and one FAQ answer say they
// don't counsel minors under SIXTEEN; another FAQ answer says "younger than
// thirteen". The page uses sixteen (the majority) until HOPE confirms.

export const HOPE = {
  name: "The HOPE Counseling Center",
  siteUrl: "https://www.thehopecounselingcenter.org/",
  siteLabel: "thehopecounselingcenter.org",
  requestUrl: "https://www.thehopecounselingcenter.org/request-counseling",
  faqUrl: "https://www.thehopecounselingcenter.org/faq",
  // HOPE's own Donate page (donation basis + sliding-scale chart); its button links
  // to northwake.com/give, which the site redirects to BUSINESS.givingUrl.
  donateUrl: "https://www.thehopecounselingcenter.org/donate",

  // The church's main line, extension 509 (the Scheduler's voicemail).
  phone: "919.556.1546 x509",
  phoneTel: "+19195561546,509", // comma = pause, then dials the extension
  email: "hopecounseling@northwake.com", // church-domain address published on HOPE's Contact page

  deposit: "$35 cash, refundable",
  when: "Typically Mon–Fri, 9–5 · some after hours",
  response: "Our Scheduler typically replies within 24 hours",
  minAge: "sixteen", // see OPEN WITH HOPE above
};
