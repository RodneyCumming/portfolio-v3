# rodneycumming.com

Personal site, rebuilt in 2026 with [Astro](https://astro.build) as plain static HTML and CSS.
Same design as the 2020 React version, without the client-side app.

- **Parallax:** the hero's mountain layers move at their original speeds using CSS
  scroll-driven animations on the normal page scroll. No JavaScript; browsers without
  support show the scene standing still.
- **No JavaScript bundle:** the technology filter uses radio buttons and `:has()`, the
  phone menu uses the Popover API, page changes use native view transitions and
  speculation-rules prerendering.
- **Images:** the large mountain layer ships as AVIF/WebP (171 KB → 20 KB); the condensed
  heading font is subset to basic Latin (9 KB).
- **Contact form:** Netlify Forms (`data-netlify`), which redirects to `/thanks`.

## Develop

Needs Node 22.23.4 or newer (`nvm use`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Deployed on Netlify from `main` (see `netlify.toml`).
