// The church's shared Google Calendar ("Church" — "Church-wide events and activities"),
// shown as a weekly calendar at the top of /events. The church keeps maintaining it in
// Google (Todd, 2026-09-26); the site READS its public iCal feed AT BUILD TIME — no
// Google embed, no client JS. Freshness = the site's rebuild cadence (daily).
// The calendar ID is already public (the old site's links expose it).

const CALENDAR_ID = "northwake.com_8hjfumg6ul92ll1bpsqdu1k5co@group.calendar.google.com";

export const CHURCH_CALENDAR = {
  feedUrl: `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`,
  // Fallback link if the feed can't be read at build time.
  googleUrl: `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}&ctz=America%2FNew_York`,
  timeZone: "America/New_York",
  weeksAhead: 13, // this week + 12 more
} as const;
