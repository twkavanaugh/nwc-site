# Design kit — "F · Warm Band" photo hero

Build-ready spec for the **North Wake Church** sub-page hero, variant **F (Warm Band, full-height photo)**, for an **Astro static rebuild**. Everything here reflects the real production markup in `Kids Hero Variations.html`. A clean, standalone, runnable copy is included in this folder as **`hero-warm-band.html`** — treat it as the source of truth and lift CSS/HTML from it directly.

**Zero JavaScript.** This hero is presentation-only. No JS of any kind.

---

## 1. What it is

A split hero on a **deeper-cream band**: text on the left (eyebrow → big sans headline with a clay accent phrase → lede → two buttons), and a **photo that fills the full height** of the band on the right, flush to the section's top/bottom/right edges. The whole section sits on `--bg-2` (one step deeper than the page) with a hairline bottom border, so it reads as a warm, self-contained band under the nav.

The defining move: `align-items: stretch` on the grid makes the photo column stretch to match the text column's natural height — no fixed hero height, no letterboxing. The photo is edge-to-edge on its side; the text keeps the site's container gutter on its side.

---

## 2. Design tokens (exact — these are the site tokens)

```css
:root {
  --bg:          #f6f3ed;   /* page background — warm white */
  --bg-2:        #ece7dc;   /* THE BAND background — one step deeper */
  --bg-3:        #e3ddce;   /* photo-column fallback behind the image */
  --ink:         #1a1814;   /* headline + primary button fill */
  --ink-2:       #3a352c;   /* lede text */
  --ink-3:       #6e665a;   /* eyebrow text */
  --ink-4:       #a89f8e;   /* tertiary (not used in this hero) */
  --line:        rgba(26,24,20,0.12);   /* section bottom hairline */
  --line-strong: rgba(26,24,20,0.22);   /* ghost-button border */
  --accent:      #8a4d2e;   /* clay — the accent phrase + eyebrow dot + primary hover */
  --accent-ink:  #ffffff;
  --sans:    "Inter Tight", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mono:    "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
}
```

**Double-duty colors to flag:** `--ink` is both headline text and the primary-button fill; `--bg` is the page background and the primary-button *text* color. `--accent` is used sparingly — only the headline accent phrase, the eyebrow dot, and the primary-button hover state.

**Dark theme:** the site defines `[data-theme="dim"]` overrides (band `--bg-2` → `#221f1a`, ink → `#f4efe5`, accent → `#d49271`). Use the token names and the band inherits dark mode for free.

---

## 3. Typography

Families (Google Fonts, already imported site-wide):
- **Inter Tight** — weights 400/500/600/700. Everything in this hero.
- **JetBrains Mono** — 400/500. The eyebrow only.
- **Newsreader** — loaded site-wide but **NOT used in this variant** (it's the serif reserved for devotional heroes C/E/G/H). Don't add it here.

Exact type for each element (all classes exist in the shared `styles.css`):

| Element | class | font | size | line-height | weight | tracking |
|---|---|---|---|---|---|---|
| Eyebrow | `.eyebrow` | mono | 12px | — | 600 | 0.18em, uppercase |
| Headline | `.display-l` | sans | `clamp(44px, 6.4vw, 104px)` | 0.98 | 600 | −0.03em |
| Lede | `.lede` | sans | `clamp(18px, 1.6vw, 22px)` | 1.5 | 400 | −0.005em |
| Button | `.btn` | sans | 14px | — | 500 | −0.005em |

The eyebrow carries a 6px accent-clay **dot** (`border-radius:50%`, `margin-right:10px`, nudged `translateY(-2px)`) before the label.

**Accessibility:** headline and lede are far above the 16px floor; the 12px mono eyebrow is a label, never the sole carrier of meaning.

---

## 4. Spacing, borders, radius

- **Section:** `padding: 0` (the band owns its own internal padding via the text column); `border-bottom: 1px solid var(--line)`.
- **Text column padding:** `80px 64px 80px max(40px, calc((100vw - 1320px) / 2 + 40px))`. 
  - Top/bottom `80px`, right `64px` (the gutter between text and photo). 
  - **The left value is the important one:** it aligns the text's left edge to the site's `1320px` centered container (40px gutter) on wide screens, while letting the band itself run full-bleed. On viewports narrower than 1400px it floors at `40px`.
- **Photo column:** `min-height: 520px` (only matters if the text column is ever shorter than that); no padding — the image is flush.
- **Grid gap:** none — the `64px` right-padding on the text column IS the visual gap, so the photo stays flush to the section's right edge.
- **Radius:** square corners throughout; the only rounded things are the pill **buttons** (`border-radius:999px`) and the circular eyebrow dot. The photo has **no** border-radius (full-bleed rectangle).
- **Shadows:** none anywhere — a hairline bottom border is the only separator.

---

## 5. Layout structure

```
section (bg-2, border-bottom hairline, padding:0)
└─ div  grid: 1.15fr 1fr, align-items: stretch
   ├─ TEXT COLUMN  (padding 80/64/80/gutter-aware-left)
   │   ├─ .eyebrow  (dot + "North Wake Kids · Babies – 5th grade")
   │   ├─ h1.display-l  (max-width:15ch; accent <span> on the final phrase)
   │   ├─ p.lede  (margin-top:28px)
   │   └─ actions  (flex, gap:12px, margin-top:32px, wrap)
   │        ├─ button.btn.btn-primary  ("Plan your visit →")
   │        └─ button.btn.btn-ghost    ("Email the kids team")
   └─ PHOTO COLUMN  (background:url(...) center/cover, fallback --bg-3, min-height:520px)
```

Column ratio **1.15 : 1** (text slightly wider than photo). `align-items: stretch` is what makes the photo fill the band's full height.

---

## 6. Production source (exact)

```html
<section style="padding:0; background:var(--bg-2); border-bottom:1px solid var(--line);">
  <div style="display:grid; grid-template-columns:1.15fr 1fr; align-items:stretch;">
    <div style="padding:80px 64px 80px max(40px, calc((100vw - 1320px) / 2 + 40px));">
      <div class="eyebrow" style="margin-bottom:28px;">
        <span class="dot"></span>North Wake Kids · Babies – 5th grade
      </div>
      <h1 class="display-l" style="max-width:15ch;">
        Know the love of Jesus. <span style="color:var(--accent);">Go to share it.</span>
      </h1>
      <p class="lede" style="margin-top:28px;">
        A place for every child to know God in Jesus, grow in love for one another,
        and be sent out to share that love with friends and family.
      </p>
      <div style="display:flex; gap:12px; margin-top:32px; flex-wrap:wrap;">
        <button class="btn btn-primary">Plan your visit <span class="arr">→</span></button>
        <button class="btn btn-ghost">Email the kids team</button>
      </div>
    </div>
    <div style="background:url('assets/kids-photo.jpg') center/cover no-repeat, var(--bg-3); min-height:520px;"></div>
  </div>
</section>
```

Supporting class CSS (from the shared `styles.css` — reproduce these if not already global):

```css
.eyebrow { font-size:12px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:var(--ink-3); }
.eyebrow .dot { display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--accent); margin-right:10px; transform:translateY(-2px); }

.display-l { font-family:var(--sans); font-size:clamp(44px,6.4vw,104px); font-weight:600; letter-spacing:-0.03em; line-height:0.98; }
.lede { font-size:clamp(18px,1.6vw,22px); line-height:1.5; color:var(--ink-2); font-weight:400; letter-spacing:-0.005em; max-width:56ch; }

.btn { display:inline-flex; align-items:center; gap:10px; padding:14px 22px; border-radius:999px; font-size:14px; font-weight:500; letter-spacing:-0.005em; border:1px solid transparent; transition:background 160ms ease, color 160ms ease, border-color 160ms ease, transform 160ms ease; }
.btn:hover { transform:translateY(-1px); }
.btn-primary { background:var(--ink); color:var(--bg); }
.btn-primary:hover { background:var(--accent); }
.btn-ghost { background:transparent; color:var(--ink); border-color:var(--line-strong); }
.btn-ghost:hover { border-color:var(--ink); }
.btn .arr { transition:transform 200ms ease; }
.btn:hover .arr { transform:translateX(3px); }
```

---

## 7. Per-page content slots

To reuse the band on another sub-page, change only:

| Slot | Kids example |
|---|---|
| Photo | `assets/kids-photo.jpg` (swap file; keep `center/cover`) |
| Eyebrow | `North Wake Kids · Babies – 5th grade` |
| Headline | `Know the love of Jesus.` + accent phrase `Go to share it.` |
| Accent phrase | the `<span style="color:var(--accent)">` — keep it to the last clause |
| Lede | one sentence, sits under the headline |
| Primary button | `Plan your visit` |
| Ghost button | `Email the kids team` |

Keep the headline to ~15ch max-width so it wraps to 2–3 tight lines beside the photo.

---

## 8. Interactivity & responsive

**Interactivity:** hover only — buttons lift 1px, primary fills clay, ghost border darkens, arrow nudges 3px right. All CSS transitions, no JS.

**Responsive:** the reference markup uses a fixed 2-column grid. For the Astro build, add ONE breakpoint so it stacks on mobile (the parent site collapses two-column heroes around 860–900px):

```css
@media (max-width: 880px) {
  .warm-band-grid { grid-template-columns: 1fr; }          /* stack */
  .warm-band-text { padding: 56px 24px; }                  /* tighter gutters */
  .warm-band-photo { min-height: 320px; order: -1; }       /* optional: photo on top */
}
```

(Give the grid/columns those class names when you translate, replacing the inline styles.) The headline and lede already scale fluidly via `clamp()`, so no other breakpoint is needed. Decide per-page whether the photo should sit above or below the text when stacked — `order:-1` puts it on top.

---

## 9. Assets

| Asset | Use | Notes |
|---|---|---|
| `assets/kids-photo.jpg` | photo column background | needs a landscape-ish crop that survives `center/cover` at ~1.15:1 → fills the right ~46% of the band; ship ≥1600px wide. Fallback `--bg-3` shows if it fails to load. |
| Fonts | Inter Tight + JetBrains Mono | already loaded; self-host in the Astro build for privacy/perf if preferred. |

No icons — the arrow is a Unicode `→` in a `.arr` span.

---

## 10. Build checklist for Claude Code (Astro)

1. Make it a component, e.g. `WarmBandHero.astro`, with props: `eyebrow`, `headlineLead`, `headlineAccent`, `lede`, `photo`, `primaryLabel`/`primaryHref`, `ghostLabel`/`ghostHref`.
2. Replace inline styles with classes (`.warm-band`, `.warm-band-grid`, `.warm-band-text`, `.warm-band-photo`); keep the exact values from §4/§6.
3. Preserve `align-items:stretch` and the gutter-aware left padding `max(40px, calc((100vw - 1320px)/2 + 40px))` — those two are what make the effect.
4. Tokens should already live in a global `:root`; don't hardcode hexes in the component.
5. Add the §8 breakpoint. Ship the photo asset ≥1600px wide.
