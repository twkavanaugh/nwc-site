// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). Zero client JS by default.
// Canonical site URL is sourced from src/data/business.ts — keep in sync.
export default defineConfig({
  site: 'https://northwake.com',
  output: 'static',
});
