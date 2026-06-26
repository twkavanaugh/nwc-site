North Wake Church — Design Tokens

Human source of truth. Edited by hand. site/src/styles/tokens.css is generated
one-way from this file and is never hand-edited. When a value changes, change it
here and regenerate.

Structure follows the two-layer rule:


Raw palette — the ONLY place a literal color value ever appears.
Semantic aliases — every token a component consumes points at a raw value.


Components consume semantic tokens only. No raw hex in component files, ever.


1. Raw palette

Literal values. Named for what they are, not what they do. Nothing else in the
system holds a hex value.

Warm neutrals (light)

Raw tokenValueNotes--raw-sand-50#f6f3edwarm white — lightest--raw-sand-100#ece7dcslightly deeper warm--raw-sand-200#e3ddcecard / divider warm

Ink scale (light)

Raw tokenValueNotes--raw-ink-900#1a1814charcoal — primary text--raw-ink-700#3a352csecondary--raw-ink-500#6e665atertiary text--raw-ink-300#a89f8equaternary / faint

Accent

Raw tokenValueNotes--raw-clay-600#8a4d2equiet clay — accent (light theme)--raw-clay-400#d49271lighter clay — currently unused (was dark-theme accent); retained as a known brand tint

Absolutes

Raw tokenValueNotes--raw-white#ffffffaccent-ink / text on dark

Dark-band neutrals (used by the inverse tokens for dark sections within the light theme)

Raw tokenValueNotes--raw-night-ink-50#f4efe5warm white text on dark bands--raw-night-ink-200#d8d2c4secondary text on dark bands

Line / hairline values (alpha over ink or white)

Raw tokenValueNotes--raw-line-inkrgba(26, 24, 20, 0.12)hairline on light--raw-line-ink-strongrgba(26, 24, 20, 0.22)stronger hairline on light--raw-line-whitergba(244, 239, 229, 0.12)hairline on dark bands--raw-line-white-strongrgba(244, 239, 229, 0.22)stronger hairline on dark bands--raw-border-on-inversergba(255, 255, 255, 0.3)ghost-button border on dark bands (Mature CTA)

One-off (NOT a core token — flagged)

Raw tokenValueNotes--raw-teal#3fb6adFeed page donation-box swatch ONLY. Appears once. Keep page-local; do not promote to a semantic token unless it recurs.


2. Semantic aliases (light theme — default)

Every token a component uses. Each points at a raw value via var().

Surfaces

Semantic token→ RawRole--bg--raw-sand-50page background--bg-2--raw-sand-100deeper section band--bg-3--raw-sand-200card / placeholder fill

Foreground / text

Semantic token→ RawRole--ink--raw-ink-900primary text--ink-2--raw-ink-700secondary text--ink-3--raw-ink-500tertiary text--ink-4--raw-ink-300faint text

Accent

Semantic token→ RawRole--accent--raw-clay-600links, marks, accent fills--accent-ink--raw-whitetext on accent fills

Lines

Semantic token→ RawRole--line--raw-line-inkhairlines, dividers--line-strong--raw-line-ink-strongstronger borders

Inverse / dark-band tokens (NEW — replaces inline rgba on dark sections)

These exist so dark bands inside the light theme (e.g. Feed "How we serve",
Mature CTA) consume named tokens instead of hardcoded var(--ink) +
rgba(255,255,255,…).

Semantic token→ RawRole--bg-inverse--raw-ink-900dark band background--ink-on-inverse--raw-night-ink-50primary text on dark band--ink-on-inverse-2--raw-night-ink-200secondary text on dark band--line-on-inverse--raw-line-whitehairline on dark band--line-on-inverse-strong--raw-line-white-strongstronger hairline on dark band--border-on-inverse--raw-border-on-inverseghost-button border on dark band


WCAG note (deferred to hardening pass): verify --accent fill + --accent-ink
text (white on clay #8a4d2e) meets AA, and --accent text on --bg-inverse
(clay on charcoal) meets AA for its size. If either fails, fix as ONE global
token decision (a dedicated deep-fill alias), not a per-section patch.




3. Typography

Families

Semantic tokenValueRole--display"Inter Tight", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serifheadings, display sizes--sans"Inter Tight", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serifbody, UI--mono"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospaceeyebrows, mono labels


Display = Inter Tight at 700 (heaviest available). Inter Tight tops out at 700;
there is no 800/900. The prototype shipped display at weight 600 — this project
steps it up to 700 for a heavier, more confident heading. Body stays 400/500.
Söhne was considered and rejected (commercial, can't be self-hosted free).

Both faces self-hosted via @fontsource — no Google Fonts CDN (the prototype's
<link> to fonts.googleapis.com is prototype-only and gets dropped). Packages:
@fontsource-variable/inter-tight (or static weights 400/500/700) and
@fontsource/jetbrains-mono (400/500).



Weights used

Inter Tight: 400, 500, 700 (700 = display). JetBrains Mono: 400, 500.

Type scale (exact, from prototype — display weights bumped 600 → 700)

Classfont-sizeline-heightweightletter-spacing.display-xlclamp(56px, 9vw, 156px)0.95700-0.035em.display-lclamp(44px, 6.4vw, 104px)0.98700-0.03em.display-mclamp(36px, 4.8vw, 72px)1.02700-0.025em.display-sclamp(28px, 3.4vw, 48px)1.05700-0.02em.title22px(default 1.5)600-0.012em.ledeclamp(18px, 1.6vw, 22px)1.5400-0.005em.body16px1.6400—.small14px1.55——.mono12px——0.04em, uppercase.eyebrow12px—6000.18em, uppercase

Base h1–h4 weight was 600 in prototype; display classes override to 700. .title
stays 600. Base body: line-height 1.5, letter-spacing -0.005em,
font-feature-settings: "ss01","cv11".


4. Spacing scale

Deduplicated from the prototype's section/gap/padding usage. Recurring values:

4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 48, 56, 64, 80, 96, 120 (px)

Section rhythm: section { padding: 96px 0 }, .tight { 72px 0 },
first-of-type { padding-top: 56px }, .footer { margin-top: 120px }.

Container: .wrap { max-width: 1320px; padding: 0 40px },
.wrap-narrow { max-width: 920px; padding: 0 40px }, mobile padding 0 22px.
Nav inner max-width: 1440px. Footer grid gap: 48px.


5. Radius

TokenValueNotes--radius-pill999pxbuttons, tags, nav-link pills--radius-card6pxcards (Feed/Mature card grids)--radius-dropdown10pxnav dropdown panel--radius-ph4pximage placeholders--radius-sm3pxswatches, ph-label


Note: radius is NOT zero here — unlike the playbook's prior-project example
(square corners). This project uses pills + small radii. Stated explicitly so the
value is a decision, not an accident.




6. Other primitives

TokenValueRole--shadow-dropdown0 12px 40px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04)nav dropdownNav blurblur(16px) saturate(140%)sticky nav backdropNav bgcolor-mix(in srgb, var(--bg) 78%, transparent)translucent navTransitions140–200ms ease (UI), 600ms cubic-bezier(0.2,0.7,0.1,1) (fadeUp)—


7. What is prototype-only and must NOT carry into tokens or theme


Tweaks panel / palette switcher / __edit_mode_set_keys postMessage — Claude
Design tooling, not a site feature.
The PALETTES object (5 alternate color schemes) — design exploration, discard.
Google Fonts <link> — replace with self-hosted @fontsource.
Inline rgba(255,255,255,…) on dark sections — replace with the inverse semantic
tokens in §2.
React/Babel client-side rendering + hash routing — becomes real Astro routes.
The full [data-theme="dim"] dark theme — dropped per decision; the church site
ships light-only. (The two dark-band text colors survive only as inverse tokens.)
