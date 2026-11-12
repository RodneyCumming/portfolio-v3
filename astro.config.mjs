// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.rodneycumming.com',
  // Pages are small, so inlining the CSS saves a render-blocking request
  build: { inlineStylesheets: 'always', format: 'file' },
  // Plain /portfolio and /contact URLs, matching Netlify's pretty URLs
  trailingSlash: 'never',
});
