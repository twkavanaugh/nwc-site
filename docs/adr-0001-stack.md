# ADR 0001: Technology Stack

- **Status:** Accepted
- **Date:** 2026-06-26

## Decision

Build the North Wake Church marketing site as:

- **Astro 5** with **static output** (`output: 'static'`) — pre-rendered HTML, zero client JS by default.
- **Deploy on Render** from pushed git source.
- **Fonts self-hosted** via `@fontsource`.
- **Plain CSS** with a **two-layer token system** (primitive tokens → semantic tokens).
- **CSS-only interactivity** (no JS framework, no client runtime).

## Context

We are rebuilding a completed React/Babel design prototype as a resilient static
site intended for successor-developer handoff. Priorities, in order:

1. **Design fidelity** — match the approved prototype.
2. **Minimal moving parts** — fewest dependencies and build steps that still deliver the design.
3. **Maintainability** — a future developer should be able to read and extend it without tribal knowledge.

## Why Astro

Zero-JS static HTML preserves crawler and LLM visibility — the full content is in
the served markup, not assembled client-side. Astro's content collections are
available from the start, giving us a typed content layer when we need it.

## Why Astro 5, not 7

We match the team's one proven prior build and the project playbook, which both
target the 5.x line. This avoids unproven major-version drift on the Content
Layer API and keeps us on a configuration we have already shipped successfully.

## Residual Risks

None blocking. Render is **not yet configured** — it will be set up in a later step.
