/* Build-time prerenderer.
   After `vite build`, this bundles the DOM-free page code, renders every
   canonical route to a static HTML file (dist/<route>/index.html) with the
   right title/description/canonical/OG tags baked in, and regenerates
   sitemap.xml. Deep links and crawlers now get real per-page HTML; the
   client router hydrates on top. Run via the `build` npm script. */
import {build} from 'esbuild';
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';

const DIST = 'dist';

/* 1. Bundle the pure entry so we can import it in Node. */
const tmp = join(tmpdir(), 'knexu-prerender-' + process.pid + '.mjs');
await build({
  entryPoints: ['src/prerender-entry.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmp,
  logLevel: 'warning'
});
const {P, ROUTES, SITE, DEFAULT_DESC} = await import(pathToFileURL(tmp).href);

/* 2. Read the built shell (index.html with hashed asset tags injected). */
const shell = readFileSync(join(DIST, 'index.html'), 'utf8');

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function replaceAttr(doc, pattern, value) {
  return doc.replace(pattern, (m, a, b) => a + esc(value) + b);
}

function renderRoute(path) {
  const meta = ROUTES[path] || {};
  const title = meta.title || 'knexu. — strategic growth agency';
  const desc = meta.description || DEFAULT_DESC;
  const url = SITE + (path === '/' ? '/' : path);
  let doc = shell;
  /* inject rendered page markup into the empty app root */
  doc = doc.replace(/<main id="app">[\s\S]*?<\/main>/, () => `<main id="app">${P[path]()}</main>`);
  /* title + per-page meta */
  doc = doc.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  doc = replaceAttr(doc, /(<meta name="description" content=")[\s\S]*?(">)/, desc);
  doc = replaceAttr(doc, /(<link rel="canonical" href=")[\s\S]*?(">)/, url);
  doc = replaceAttr(doc, /(<meta property="og:url" content=")[\s\S]*?(">)/, url);
  doc = replaceAttr(doc, /(<meta property="og:title" content=")[\s\S]*?(">)/, title);
  doc = replaceAttr(doc, /(<meta property="og:description" content=")[\s\S]*?(">)/, desc);
  doc = replaceAttr(doc, /(<meta name="twitter:title" content=")[\s\S]*?(">)/, title);
  doc = replaceAttr(doc, /(<meta name="twitter:description" content=")[\s\S]*?(">)/, desc);
  return doc;
}

const routes = Object.keys(ROUTES);
for (const path of routes) {
  const out = path === '/' ? join(DIST, 'index.html') : join(DIST, path.slice(1), 'index.html');
  mkdirSync(dirname(out), {recursive: true});
  writeFileSync(out, renderRoute(path));
}

/* 3. Regenerate sitemap.xml from the canonical route list. */
const urls = routes.map(p => {
  const loc = SITE + (p === '/' ? '/' : p);
  const priority = p === '/' ? '1.0' : '0.8';
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');
writeFileSync(join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

console.log(`prerendered ${routes.length} routes + sitemap`);
