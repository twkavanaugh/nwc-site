// @ts-check
import { defineConfig } from 'astro/config';
import remarkYoutube from './src/lib/remark-youtube.mjs';

// Static output (default). Zero client JS by default.
// Canonical site URL is sourced from src/data/business.ts — keep in sync.
//
// SANCTIONED THIRD-PARTY EMBED EXCEPTION (decided 2026-07-07)
// -----------------------------------------------------------
// remarkYoutube turns a standalone bare YouTube URL in Markdown into a lazy,
// privacy-mode iframe (youtube-nocookie.com, loading="lazy"). A deliberate
// exception to the site's no-third-party / near-zero-JS stance — the migrated
// Adult Discipleship course pages are video-heavy and embed parity is a content
// requirement. It sits alongside the ONLY other sanctioned embed, the Branchcast
// sermon widget on /sermons. No other third-party embeds without a documented decision.
export default defineConfig({
  site: 'https://northwake.com',
  output: 'static',
  // Legacy URLs printed on church materials. Static redirect pages (meta refresh +
  // canonical) — no JS. /womensministry is on the Women's Ministry postcard.
  redirects: {
    '/womensministry': '/community/women',
    // Old-site giving URL — HOPE Counseling's Donate button (thehopecounselingcenter.org/donate)
    // links here. Keep in sync with BUSINESS.givingUrl in src/data/business.ts.
    '/give': 'https://onrealm.org/NorthWake/-/form/give/now',
  },
  markdown: {
    remarkPlugins: [remarkYoutube],
  },
});
