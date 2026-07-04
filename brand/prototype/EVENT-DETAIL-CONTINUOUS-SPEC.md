# Event Detail Page — Design Package

One template, three frames. Static HTML/CSS, zero decorative JS. Matches the North Wake design system exactly.

- **A · Sparse (baseline)** — desktop 1440. The design target: minimal content (date/time/place, two sentences, no register link, no image, no cost) that still composes.
- **D · Sparse + featured image + shaded rail** — desktop 1440. Adds a wide/short 21:8 featured image between the contact line and the body, and a shaded panel behind the facts box.
- **C · Sparse — mobile** — 390px. Single column; facts box stacks below the header; all body text 16px minimum.

Open `Event Detail Templates (A-D-C).html` to see all three on one canvas (pan/zoom).

---

## Design tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f6f3ed` | page background, facts-box fill |
| `--bg2` | `#ede9e1` | shaded info-column panel, poster placeholder fill |
| `--ink` | `#1a1814` | primary text, primary button fill |
| `--ink2` | `#3a352c` | subtitle, body prose |
| `--ink3` | `#6e665a` | eyebrows, labels, meta, secondary text |
| `--hair` | `#d9d4c9` | all 1px borders / dividers |
| `--accent` | `#8a4d2e` | eyebrow dot, links, calendar month, list bullets (sparingly) |

Fonts: **Inter Tight** (headings/UI; 700 for display), **JetBrains Mono** (uppercase labels/eyebrows, 0.18em tracking), **Newsreader** (available for devotional accents — unused on this page). Body ≥ 18px desktop / ≥ 16px mobile.

No shadows. No gradients. Square corners everywhere except pill buttons (`border-radius: 999px`).

---

## Type scale

| Element | Desktop | Mobile |
|---|---|---|
| Title (`.ev-title`) | 88px / 700 / -0.03em / lh 1.0 | 46px |
| Subtitle (`.ev-sub`) | 22px / 400 | 18px |
| Body (`.prose p`) | 18px / lh 1.65 | 16px |
| Contact line | 14px | 14px |
| Eyebrow | 12px / 0.18em / uppercase | 11px |
| Facts calendar day | 56px / 700 | 46px |
| Facts row value | 16.5px / 600 | 16px |
| Facts row key | 11px mono / 0.16em | 11px |

---

## Layout

**Header zone** — CSS grid `1.5fr / 420px`, `gap: 72px`, `align-items: start`. Left column = eyebrow → title → subtitle → contact line → (image, in D) → body prose, all in one flow with **no section band or background change**. Right column = facts box.

**Content wrapper** — `max-width: 1240px; margin: 0 auto; padding: 0 48px`.

**Facts box** (`.facts`) — 1px hairline border, cream fill. Calendar block (mono month + 56px day) on top, hairline-divided rows below (Date / Time / Place / optional Cost). Register button lives *inside* the box (`.facts-cta`) only when a registration link exists — omitted in all three sparse frames.

**Shaded info column (D)** — wrap the `.facts` box in a `--bg2` panel: `background: var(--bg2); padding: 20px; margin: -20px;`. The negative margin keeps the box aligned to the grid while the shade bleeds 20px around it. The facts box itself stays cream — do not change its fill.

**Featured image (D)** — `.poster` at `aspect-ratio: 21/8` (wide + short so it never dominates), placed between the contact line and the body prose. Swap the placeholder for a real `<img>` with the same aspect ratio.

**Mobile (C)** — grid collapses to one column: header → facts box (stacked, full width) → body → browse button. Facts rows tighten to `62px 1fr` and 22px side padding.

**Footer** — centered ghost "← Browse all events" button, ~96px top padding desktop / 56px mobile.

Breadcrumb bar is out of scope (rendered here as a dimmed stand-in) — leave room above the header.

---

## Reusable primitives (appear across the site)

- **Eyebrow** — mono uppercase + clay dot. Used on every section header site-wide.
- **Facts box** — the bordered calendar+rows card. Reusable for any event.
- **Pill buttons** — `.btn-ink` (solid) / `.btn-ghost` (outline).
- **Poster placeholder** — hairline box, `--bg2` fill, diagonal hatch, mono label chip.

---

## Interactivity / build notes

Nothing on this page needs JS. Links, buttons, and the facts box are all static. Hover states are the only dynamic behavior (link underline on `.prose a`) — CSS-only. Safe to hand straight to a static-site build (Astro, etc.).
