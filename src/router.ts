/* =====================================================================
   ROUTER + MOTION
   ===================================================================== */
import {P} from './pages';
import {NAV} from './nav';
import {AREAS,SECTORS} from './content';

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
export function route(){
  const path=(location.hash||'#/').replace(/^#/,'').replace(/\/$/,'')||'/';
  document.getElementById('app').innerHTML=(P[path]||P['/404'])();
  window.scrollTo({top:0,behavior:'auto'});
  document.querySelectorAll('.navbtn').forEach((b,i)=>{const g=NAV[i];if(!g)return;
    /* active state is exclusive: each top-level item owns its own section only,
       so a mega-menu cross-link (e.g. Consultancy → Work) never co-highlights. */
    let hit=g.href===('#'+path);
    if(g.label==='Consultancy')hit=hit||!!AREAS['/'+path.split('/')[1]]||!!SECTORS['/'+path.split('/')[1]]||path==='/consultancy';
    if(g.label==='Digital infrastructure')hit=hit||path.startsWith('/digital');
    if(g.label==='Work')hit=hit||path==='/work'||path==='/case-studies';
    b.classList.toggle('is-active',hit);});
  initMotion();
}
