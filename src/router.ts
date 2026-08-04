/* =====================================================================
   ROUTER + MOTION — History API (clean URLs, no hash).
   Internal root-relative links are intercepted and handled via
   pushState; deep links and refreshes are served by prerendered HTML
   (see scripts/prerender.mjs) with the client re-rendering on top.
   ===================================================================== */
import {P} from './pages';
import {NAV} from './nav';
import {AREAS,SECTORS} from './content';
import {ROUTES,DEFAULT_DESC,SITE} from './routes';

const reduceMotion=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
let io=null;
function countUp(el){const target=+el.dataset.count;if(reduceMotion){el.textContent=target;return;}const dur=1000,t0=performance.now();(function tick(now){const p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=Math.round(target*e);if(p<1)requestAnimationFrame(tick);})(performance.now());}
export function initMotion(){
  if(io)io.disconnect();
  const reveals=[...document.querySelectorAll('.reveal')],counters=[...document.querySelectorAll('[data-count]')];
  const showAll=()=>{reveals.forEach(e=>e.classList.add('in'));counters.forEach(countUp);};
  if(reduceMotion||!('IntersectionObserver'in window)){showAll();return;}
  io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;en.target.classList.add('in');if(en.target.hasAttribute('data-count'))countUp(en.target);io.unobserve(en.target);}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  reveals.forEach(e=>io.observe(e));counters.forEach(e=>io.observe(e));
  /* safety net: never let content stay hidden if the observer misfires */
  setTimeout(()=>reveals.forEach(e=>e.classList.add('in')),1600);
}

function currentPath(){return location.pathname.replace(/\/+$/,'')||'/';}

/* keep <title> and per-page meta in sync on client navigation */
function setMeta(path){
  const r=ROUTES[path];
  const title=r?r.title:'knexu. — strategic growth agency';
  const desc=r?r.description:DEFAULT_DESC;
  const url=SITE+(path==='/'?'/':path);
  document.title=title;
  const set=(sel,attr,val)=>{const el=document.querySelector(sel);if(el)el.setAttribute(attr,val);};
  set('meta[name="description"]','content',desc);
  set('link[rel="canonical"]','href',url);
  set('meta[property="og:url"]','content',url);
  set('meta[property="og:title"]','content',title);
  set('meta[property="og:description"]','content',desc);
  set('meta[name="twitter:title"]','content',title);
  set('meta[name="twitter:description"]','content',desc);
}

export function render(){
  const path=currentPath();
  document.getElementById('app').innerHTML=(P[path]||P['/404'])();
  setMeta(path);
  window.scrollTo({top:0,behavior:'auto'});
  document.querySelectorAll('.navbtn').forEach((b,i)=>{const g=NAV[i];if(!g)return;
    let hit=g.href===path;
    if(g.label==='Consultancy')hit=hit||!!AREAS['/'+path.split('/')[1]]||!!SECTORS['/'+path.split('/')[1]]||path==='/consultancy';
    if(g.label==='Digital infrastructure')hit=hit||path.startsWith('/digital');
    if(g.label==='Work')hit=hit||path==='/work'||path==='/case-studies';
    b.classList.toggle('is-active',hit);});
  initMotion();
}

/* intercept same-origin, root-relative link clicks and route in place */
function onClick(e){
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const a=e.target&&e.target.closest?e.target.closest('a'):null;
  if(!a)return;
  const href=a.getAttribute('href');
  if(!href||!href.startsWith('/')||href.startsWith('//'))return; /* external, mailto:, tel:, anchors -> default */
  if(a.target&&a.target!==''&&a.target!=='_self')return;
  if(a.hasAttribute('download'))return;
  e.preventDefault();
  const to=href.replace(/\/+$/,'')||'/';
  if(to!==currentPath()){history.pushState(null,'',href);render();}
  else window.scrollTo({top:0,behavior:'auto'});
}

export function initRouter(){
  document.addEventListener('click',onClick);
  window.addEventListener('popstate',render);
  render();
}
