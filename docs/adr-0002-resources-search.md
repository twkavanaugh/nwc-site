# ADR 0002: Search on /resources (the site's third script exception)

- **Status:** Accepted (Todd, 2026-09-26)
- **Date:** 2026-09-26

## Decision

Add a small, first-party, inline search box to `/resources` that filters the catalog
already rendered on the page by title, description and category label. It is the site's
**third sanctioned script exception** (after the BranchCast resizer on `/sermons` and the
remark YouTube→nocookie transform). Unlike those two, it is first-party code we own.

## Context

ADR 0001 made CSS-only interactivity a rule, and it has held: the mega-menu, hamburger,
`:target` category filter and accordions are all CSS. Text search is the one feature CSS
cannot do. CSS cannot read what someone types into a box.

The church is loading a large batch of resources curated from the old site (week of
2026-09-28). A category filter works for a handful of items. With dozens or hundreds,
people need to type "marriage" or "advent" and see matches.

## Limits (these are the decision, not details)

1. **`/resources` only.** The script is scoped to the resources index. No other page gets
   it, and it is not a site-wide search.
2. **Inline, no library, no network.** A few dozen lines in the page. It makes no requests,
   loads no index file and depends on no third-party code. Budget: under 2KB unminified.
3. **Progressive enhancement.** The search box ships `hidden`, and the script reveals it.
   Without JavaScript the page is exactly today's page: the full list plus the CSS category
   filter. Nobody ever sees a box that does nothing.
4. **Filters what is already there.** Every resource is still in the HTML (crawlers, LLMs
   and no-JS readers see everything). The script only sets `hidden` on rows that don't
   match.
5. **Composes with the category filter.** The CSS `:target` filter hides by category and
   the script hides by text, so a visible row matches both. Neither knows about the other.
6. **Plain matching.** Case- and accent-insensitive. Every word typed must appear
   ("family advent" matches items containing both). Words of five or more letters drop
   a trailing -ies/-es/-s/-y before matching, so singular and plural meet ("family" and
   "families" both find "Families" and "Family of God"). Results are announced to screen
   readers through a polite live region ("12 resources" / "No resources match").
7. **No stored or sent queries.** Nothing goes in the URL or storage, and no analytics.

## Alternatives considered

- **Pagefind** (a search index generated at build time). It's strong when you need to
  search inside page text, but most of this catalog is PDFs and links, and Pagefind
  doesn't read inside PDFs either. It adds a build step, an index download and a
  dependency for little gain here. **Revisit** if the catalog passes about 300 items or
  staff want search across the whole site.
- **CSS-only.** Not possible for free-text input.
- **Off-site search (a Google `site:` form).** Zero JavaScript, but it sends people off the
  site, depends on Google's indexing and exposes their query to a third party.
- **Categories only.** Doesn't scale to the incoming catalog.

## Consequences

- `CLAUDE.md` non-negotiable #1 is updated from "exactly two" to three exceptions, pointing
  here. The rule otherwise stands: **no fourth exception without another ADR.**
- The script carries a comment at its site pointing to this ADR, as the other two do.
