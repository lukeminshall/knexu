/* Pure entry for the build-time prerenderer (scripts/prerender.mjs).
   Re-exports only DOM-free modules so it can be bundled and run in Node.
   Do NOT import nav.ts, router.ts, forms.ts or styles here — they touch
   the DOM at module load. */
import {P} from './pages';
import {ROUTES,SITE,DEFAULT_DESC} from './routes';
export {P, ROUTES, SITE, DEFAULT_DESC};
