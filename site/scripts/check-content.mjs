// Pre-build guard (runs automatically as `prebuild` before `npm run build`, locally
// and on Render). A failure here FAILS THE BUILD, so Render never deploys it — the
// live site keeps the last good version. Three checks:
//
// 1. UPLOAD SIZE — Pages CMS has no upload size limit, so staff could commit a huge
//    scanned PDF or photo. Any file over MAX_MB in the CMS upload folders fails.
// 2. CATEGORY + SERIES SYNC — categories and blog series are developer-only: each
//    one is a YAML file (src/content/categories/, src/content/blog-series/) AND an
//    entry in EVERY matching pick-list in ../.pages.yml (between CATEGORIES-START/END
//    or SERIES-START/END markers). If they disagree, staff see a stale list.
// 3. GIVING-URL SYNC — the /give redirect must match BUSINESS.givingUrl.
//
// No dependencies (plain Node) so it runs anywhere the build runs.

import { readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const MAX_MB = 15; // Todd, 2026-09-24
const UPLOAD_DIRS = ["public/resources", "public/events", "src/assets/blog"]; // must match .pages.yml media inputs
const errors = [];

// --- 1. Upload size ---
for (const dir of UPLOAD_DIRS) {
  if (!existsSync(dir)) continue;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const st = statSync(path);
    if (!st.isFile()) continue;
    const mb = st.size / (1024 * 1024);
    if (mb > MAX_MB) {
      errors.push(
        `${path} is ${mb.toFixed(1)}MB — the limit is ${MAX_MB}MB. ` +
          `Compress it (or export a smaller PDF) and upload it again in Pages CMS.`,
      );
    }
  }
}

// --- 2. Category + series sync ---
const idsIn = (dir) =>
  readdirSync(dir)
    .filter((f) => f.endsWith(".yaml"))
    .map((f) => basename(f, ".yaml"))
    .sort();
const catDir = "src/content/categories";
const catIds = idsIn(catDir);
const seriesDir = "src/content/blog-series";
const seriesIds = idsIn(seriesDir);

const cmsPath = "../.pages.yml";
if (!existsSync(cmsPath)) {
  console.warn(`[check-content] ${cmsPath} not found — skipping the pick-list sync checks.`);
} else {
  const cms = readFileSync(cmsPath, "utf8");
  // marker = CATEGORIES (one block per staff collection that tags categories:
  // resources, posts) or SERIES (the blog).
  const syncCheck = (marker, dir, ids) => {
    const blocks = [...cms.matchAll(new RegExp(`# ${marker}-START([\\s\\S]*?)# ${marker}-END`, "g"))];
    if (blocks.length === 0) {
      errors.push(`${cmsPath}: ${marker}-START / ${marker}-END markers are missing.`);
    }
    blocks.forEach((block, i) => {
      const where = `${marker.toLowerCase()} pick-list #${i + 1} in .pages.yml`;
      const cmsIds = [...block[1].matchAll(/-\s*name:\s*([a-z0-9-]+)/g)].map((m) => m[1]).sort();
      const missing = ids.filter((id) => !cmsIds.includes(id));
      const extra = cmsIds.filter((id) => !ids.includes(id));
      if (missing.length) errors.push(`Missing from ${where}: ${missing.join(", ")}`);
      if (extra.length) errors.push(`${where} lists entries with no file in ${dir}/: ${extra.join(", ")}`);
    });
  };
  syncCheck("CATEGORIES", catDir, catIds);
  syncCheck("SERIES", seriesDir, seriesIds);
}

// --- 3. Giving-URL sync — the /give redirect in astro.config.mjs must point at
//        BUSINESS.givingUrl (business.ts is the SSOT; the config can't import it).
{
  const biz = readFileSync("src/data/business.ts", "utf8").match(/givingUrl:\s*'([^']+)'/);
  const cfg = readFileSync("astro.config.mjs", "utf8").match(/'\/give':\s*'([^']+)'/);
  if (biz && cfg && biz[1] !== cfg[1])
    errors.push(`astro.config.mjs /give redirect (${cfg[1]}) doesn't match BUSINESS.givingUrl (${biz[1]}).`);
}

if (errors.length) {
  console.error("\n[check-content] BUILD STOPPED — nothing was deployed:\n");
  for (const e of errors) console.error("  ✗ " + e);
  console.error("");
  process.exit(1);
}
console.log(
  `[check-content] OK — uploads ≤ ${MAX_MB}MB, ${catIds.length} categories + ${seriesIds.length} blog series in sync with Pages CMS.`,
);
