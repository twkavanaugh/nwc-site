// Membership process FACTS (brand/prototype/MEMBERSHIP-SPEC.md §8 "FACT" rows) — what
// the church office actually does. Change a number here, not in the page.
// Source: the church office's process notes (Todd, 2026-09-26). UNVERIFIED items are
// on the state doc's list (the course is 6 classes per these notes, but the old
// course page has 5 recorded weeks — Todd: hold to the notes).

export const MEMBERSHIP = {
  steps: 5,
  conversationMinutes: 30, // step 3: a brief get-to-know-each-other conversation
  courseClasses: 6, // step 4: New Members Course length
  courseMinClasses: 4, // attend at least this many to complete it
  // The course's own page (migrated from northwake.com/new-member-course/, 2026-09-26).
  coursePage: "/resources/new-members-course",
  // Step 4B's "required documents" = the Membership Packet (Todd, 2026-09-26). Its
  // resources entry id; the page links it only once the real PDF replaces the
  // PLACEHOLDER path.
  packetResourceId: "membership-packet",
} as const;
