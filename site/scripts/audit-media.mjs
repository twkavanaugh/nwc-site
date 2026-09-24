// Media audit — run by a developer each quarter: `npm run audit-media` (in site/).
// Deleting an entry in Pages CMS does NOT delete the file it uploaded — the file
// stays in the repo AND stays publicly reachable at its URL. This lists every file
// in the CMS upload folders that nothing in the site source refers to, so it can
// be removed (in Pages CMS → Media, or with git rm).
//
// Read-only: it never deletes anything. Not part of the build.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// Keep in sync with the media inputs in ../.pages.yml (and check-content.mjs).
const UPLOAD_DIRS = [
  { dir: "public/resources", url: "/resources" },
  { dir: "public/events", url: "/events" },
];
// Anything under src/ can reference an upload (content files, pages, components).
const SOURCE_ROOT = "src";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const source = walk(SOURCE_ROOT)
  .filter((p) => /\.(md|mdx|ya?ml|astro|ts|js|mjs|json)$/.test(p))
  .map((p) => readFileSync(p, "utf8"))
  .join("\n");

const orphans = [];
for (const { dir, url } of UPLOAD_DIRS) {
  let files = [];
  try {
    files = readdirSync(dir).filter((f) => !f.startsWith("."));
  } catch {
    continue;
  }
  for (const f of files) {
    const publicUrl = `${url}/${f}`;
    if (!source.includes(publicUrl)) {
      const mb = (statSync(join(dir, f)).size / (1024 * 1024)).toFixed(1);
      orphans.push(`${join(dir, f)}  (${mb}MB)  → still public at ${publicUrl}`);
    }
  }
}

if (orphans.length === 0) {
  console.log("[audit-media] Clean — every uploaded file is in use.");
} else {
  console.log(`[audit-media] ${orphans.length} uploaded file(s) nothing on the site uses:\n`);
  for (const o of orphans) console.log("  • " + o);
  console.log(
    "\nCheck each one isn't needed, then delete it in Pages CMS → Media (or `git rm`). " +
      "Remember: these are publicly reachable until removed.",
  );
}
