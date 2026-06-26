# North Wake Church — Website

Static marketing site for North Wake Church, built with [Astro 5](https://astro.build).

## Repository layout

```
.
├── site/    Deployable Astro project (the deployment root)
├── brand/   Brand source of truth (design-tokens.md) + prototype/
├── docs/    Architecture decision records and project docs
└── ai/      AI working notes / context
```

`site/` is the deployable root. Everything outside it (`brand/`, `docs/`, `ai/`)
is project material that is **not** deployed.

## Deploy (Render)

Configured in a later step. When set up, use:

- **Root Directory:** `site`
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

## Local development

```sh
cd site
npm install
npm run dev      # local dev server
npm run build    # static build -> site/dist/
```
