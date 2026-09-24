# CLAUDE.md — North Wake Church site

Static **Astro 5** marketing site for North Wake Church (Wake Forest, NC). **LIVE** on Render,
auto-deploying from GitHub `main`. Treat it as a production site with a real congregation
reading it.

**Current state doc:** `docs/PROJECT-STATE-2026-09-13.md` — read it before any substantive
work. It carries what's built, what's unverified, and what's queued. The older
`PROJECT-STATE-*` files are superseded history; don't work from them.

## Layout
- `site/` — the deployable Astro project (**the deploy root**). Run all npm commands here.
- `brand/` — design source of truth: `design-tokens.md` (human SSOT) + `prototype/` (committed
  design packages CC builds against).
- `docs/` — ADRs, content model, state docs, photographer shot list.
- Everything outside `site/` is project material and is **not** deployed.

## Commands
```sh
cd site && npm run dev      # localhost:4321
cd site && npm run build    # static build -> site/dist/ (gitignored)
```
**Restart the dev server after any `npm install` or change to `global.css`/`tokens.css`.** A
stale server can't resolve a new package → `global.css` fails at request time → it `@import`s
`tokens.css`, so ALL tokens go undefined and the page looks catastrophically broken. That is
never a code bug. Ctrl+C, `npm run dev`, hard-refresh. The production build is unaffected.

## Non-negotiables
1. **Near-zero client JS.** Interactivity is CSS-only (mega-menu, hamburger, `:target`
   filtering, `<details>` accordions). There are exactly **two** sanctioned third-party
   exceptions, both documented in code: the BranchCast resizer on `/sermons` (the only
   `<script>` in `dist/`) and the remark YouTube→nocookie embed transform. **No third
   exception without a written decision.**
2. **Semantic tokens only.** No raw hex, no `var(--raw-*)`, no inline `rgba()`/`#fff`, no
   inline styles in components. Dark bands use the inverse tokens; **accent TEXT on dark must
   use `--accent-on-inverse`** (the clay-600 default fails WCAG at 2.69:1). Documented literal
   exceptions exist for real-image scrims — each is commented at its site.
3. **`site/src/styles/tokens.css` is GENERATED one-way from `brand/design-tokens.md`. Never
   hand-edit it.**
4. **16px content floor** at every viewport. Mono/eyebrow/caption micro-type is exempt but
   must never be the sole carrier of meaning.
5. **`site/src/data/business.ts` is the SSOT** for church facts (NAP, service times, giving
   URL). Never hardcode them in a page.
6. **Honest placeholders only.** Nothing invented. Never publish a personal email or wire a
   `mailto:` to an unverified address — render it inert. Anything unconfirmed goes on the
   UNVERIFIED list in the state doc.

## Conventions worth knowing before you edit
- **`/resources/PLACEHOLDER-…`** as a download path means "the church hasn't provided this
  document yet" — the row renders inert ("Available soon"). Swapping in the real path is the
  entire go-live action. Enforced in both `resources/index.astro` and `resources/[slug].astro`.
- **The `/resources` category filter CSS is generated from the `categories` collection.**
  Adding a category needs zero CSS edits.
- **Content collections:** facts in frontmatter, narrative in the Markdown body. `categories`
  are validated via `reference()`, so a bad id fails the build rather than rendering wrong.
  Resources store `file` (PDF upload) OR `link` (URL / post slug) — exactly one, matched to
  `type`, enforced by the schema. `link` / `registrationUrl` are deliberately `z.string()`
  not `.url()` — they accept internal paths and slugs.
- **Staff edit events, resources and posts (text pages) in Pages CMS (`.pages.yml`)** —
  Karen and Devin. Design every CMS field for a non-technical editor. Post bodies are saved
  as Markdown (`format: markdown`) — required by the YouTube transform. **Categories are
  developer-only:** a new one = a YAML file in `site/src/content/categories/` + a line in
  EVERY `CATEGORIES-START/END` block in `.pages.yml` (resources and posts).
  `site/scripts/check-content.mjs` runs as `prebuild` and fails the build if those disagree
  or any upload exceeds 15MB.
- **Astro `:where()` is zero specificity.** A global override of a page-scoped class needs
  added specificity to win — first suspect when a global rule silently no-ops.
- **Coupled CSS values carry paired comments** (e.g. the mobile-nav `72px` = `14×2 + 44`).
  Change one, change the other.
- **Build against the real committed prototype** in `brand/prototype/`, not from a description.

## Workflow
- **`pwd` discipline:** confirm you're in the NWC Site repo before acting — a separate
  `Heritage-Metal-Site` project lives on this machine and they collided once.
- **`git status` STOP-gate** at the top of each task; it keeps catching drift.
- **"Approved" means commit now**, same turn.
- **The push IS the deploy.** Browser review happens BEFORE the push, not after.
- **One gated task at a time.** Multi-part work runs as an explicit gate sequence (events took
  4 gates, mobile nav 2, resources 4) with a browser review between gates.
- **New design export → READ-AND-PLAN first, no build:** locate assets, read the page, decide
  the inline→token translation, flag literal exceptions, sequence the gates.
- **Update the state doc at the END of a work block.** A two-month gap already cost this
  project the record of a pastor meeting.

## Handoff obligation (do not lose)
Everything is under **Todd's personal accounts** (GitHub `twkavanaugh`, Render under a Yahoo
email) plus the Pages CMS GitHub App. At handoff: transfer the repo to a church org, reassign
Render, and re-authorize the Pages CMS app under the church-owned repo.
