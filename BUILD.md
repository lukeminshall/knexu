# Build brief (for Claude Code)

## What this is
Knexu's marketing site. Consultancy-led, outcome/ROI-led. One SPA, hash routing,
no framework, built with Vite. It already runs and builds. Your job is to refine
and extend, not to rebuild.

## Design system (in src/styles.css :root)
- Font: Poppins throughout.
- Colour: --ink #0E0E12, --paper #FFFFFF, --soft #F5F5F6, one accent --pink #FF2E63.
- One pink only. Hairline rules (--line). No shadows, gradients-on-chrome, or rounded cards.
- Motion is subtle and always disabled under prefers-reduced-motion.

## Information architecture
- Two primary menus: **Consultancy** and **Digital infrastructure**.
- Strict series-of-three: 3 AREAS (Sport, Health, Wellbeing) and 3 SECTORS
  (Academia, Public organisations, Private organisations).
- Digital: 3 products (DataLense, Straight Talking, Knexusport) + How we build.
- Everything framed around three returns: grow revenue, recover margin, unlock capital.

## The 16 graphics (src/app.ts)
Each is a function returning an SVG string, themed via CSS vars, animated via classes
in styles.css (disabled under reduced-motion). All registered in the `GFX` map.
catchment · pathway · pitch · wave · scatter · return(bars) · network · radar ·
ridge · layers · dial · ecg · bracket · area · funnel · grid.
To add one: write the generator, add it to `GFX`, reference it from a page or the
`gfx` field in AREAS/SECTORS.

## Suggested first task: split src/app.ts into modules
It is currently one file for portability. Recommended split (pure refactor, no behaviour change):
- src/graphics.ts  — helpers (rnd, blob, smoothClosed, pol, arcPath, uid) + 16 generators + GFX
- src/content.ts   — AREAS, SECTORS, CASES
- src/nav.ts       — NAV + buildNav
- src/components.ts — triad, indexList, shead, returnGrid, pgrid, pts, feature, featInline,
                      workGrid, caseBlocks, closing, page
- src/pages.ts     — the P route map
- src/router.ts    — route() + initMotion()
- src/main.ts      — import styles, buildNav(), start router
Add explicit exports/imports; graphics.ts is imported by content-driven pages via GFX.

## Guardrails
- Keep content visible-by-default; treat hide-then-animate as the opt-in. (A reveal
  animation that fails must fail toward showing content, never hiding it.)
- Do not reintroduce stock photography.
- Verify every route in a real browser after changes — a string/markup check will not
  catch CSS cascade or animation issues.
- SVG gradient stops use var(--pink); fine on current Safari/Chrome. Add a hex fallback
  only if you must support older engines.

## Content to confirm before launch
- Real return figures per case study (currently qualitative placeholders).
- Housden Group / NHS Trust PPU wording — some engagements include confidential bids;
  keep at model level until specific Trusts are cleared to name.
- Northumbria (Newcastle) monetisation case — sharpen if the mechanism differs.
