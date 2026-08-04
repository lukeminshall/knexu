/* =====================================================================
   NAV — primary menu data, mega-menu build and open/close wiring.
   ===================================================================== */
export const NAV=[
  {label:"Consultancy",href:"/consultancy",note:"Three areas, three sectors, one measure: the return. Every engagement is scoped to a revenue, margin or capital outcome.",cols:[
    {h:"Areas",items:[["Sport","/sport"],["Health","/health"],["Wellbeing","/wellbeing"]]},
    {h:"Sectors",items:[["Academia","/academia"],["Public organisations","/public"],["Private organisations","/private"]]},
    {h:"Start here",items:[["Consultancy overview","/consultancy"],["How we create return","/consultancy"],["Work &amp; outcomes","/work"]]}
  ]},
  {label:"Digital infrastructure",href:"/digital",note:"Products we own and operate, plus bespoke builds. Each one turns a strategy into a live, revenue-bearing asset.",cols:[
    {h:"Products",items:[["DataLense","/digital/datalense"],["Straight Talking","/digital/straight-talking"],["Knexusport","/digital/knexusport"]]},
    {h:"Practice",items:[["Overview","/digital"],["How we build","/digital/how-we-build"],["Bespoke builds","/digital"]]}
  ]},
  {label:"Work",href:"/work"},
  {label:"Insights",href:"/insights"},
  {label:"About",href:"/about"}
];
export function buildNav(){
  const nav=document.getElementById('nav');
  nav.innerHTML=NAV.map((g,i)=>{
    if(!g.cols)return `<div class="navitem" data-i="${i}"><a class="navbtn" href="${g.href}">${g.label}</a></div>`;
    return `<div class="navitem" data-i="${i}"><button class="navbtn" aria-expanded="false">${g.label}</button>
      <div class="mega"><div class="cols">${g.cols.map(c=>`<div class="col"><h4>${c.h}</h4>${c.items.map(([t,h])=>`<a href="${h}">${t}</a>`).join('')}</div>`).join('')}</div>${g.note?`<div class="note">${g.note}</div>`:''}</div></div>`;
  }).join('')+`<a class="head-cta" href="/contact">Contact</a>`;
  nav.querySelectorAll('button.navbtn').forEach(btn=>btn.addEventListener('click',e=>{const item=btn.parentElement,was=item.classList.contains('open');closeAll();if(!was){item.classList.add('open');btn.setAttribute('aria-expanded','true');}e.stopPropagation();}));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{closeAll();closeMobile();}));
}
function closeAll(){document.querySelectorAll('.navitem').forEach(n=>n.classList.remove('open'));document.querySelectorAll('button.navbtn').forEach(b=>b.setAttribute('aria-expanded','false'));}
function closeMobile(){document.getElementById('nav').classList.remove('open');document.getElementById('burger').setAttribute('aria-expanded','false');}
document.addEventListener('click',closeAll);
document.getElementById('burger').addEventListener('click',e=>{const n=document.getElementById('nav'),open=n.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open));e.stopPropagation();});
