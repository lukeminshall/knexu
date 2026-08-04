# knexu.co.uk

Marketing site for Knexu — a strategic growth agency for sport, health and wellbeing.
Single-page app, hash-routed, no framework. Poppins, black + white + one pink accent.
Sixteen bespoke animated SVG graphics, no stock photography.

## Run

```bash
npm install
npm run dev      # local dev server (Vite)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Deploy

Netlify is pre-configured (`netlify.toml`): build `npm run build`, publish `dist`.
Any static host works — the build output is plain HTML/CSS/JS.

## Structure

```
index.html        # shell: header, <main id="app">, footer
src/main.ts       # entry: imports styles + app
src/styles.css    # all styling and animation (design tokens at :root)
src/app.ts        # nav, 16 graphics, content, components, router, motion
netlify.toml      # deploy config
```

## Notes

- **Return figures are placeholders.** Case-study "return" lines are written to carry
  real numbers once each client signs them off. The Work page says so explicitly.
- **No images to host** — every visual is generated SVG, themed from CSS variables,
  so changing `--pink` recolours the whole site including the graphics.
- **Motion** respects `prefers-reduced-motion` and fails toward showing content.
- See `BUILD.md` for architecture, the graphic set, and suggested next steps.
