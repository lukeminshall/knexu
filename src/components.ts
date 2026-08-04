/* =====================================================================
   BLOCKS — reusable markup builders shared across pages.
   ===================================================================== */
export const triad=`<span class="triad" aria-hidden="true"><i></i><i></i><i></i></span>`;
export const indexList=rows=>`<div class="index">${rows.map((r,i)=>`
  <a class="row reveal" style="--i:${i}" href="${r.href}">
    <div><h3>${r.t}</h3>${r.sub?`<span class="sub">${r.sub}</span>`:''}</div>
    <div><p>${r.d}</p>${r.ret?`<span class="ret"><b>Return:</b> ${r.ret}</span>`:''}</div>
    <span class="arw">→</span></a>`).join('')}</div>`;
export const shead=(lbl,h,p,link)=>`<div class="shead reveal">
  <div><span class="top lbl">${triad}${lbl}</span><h2>${h}</h2></div>
  ${p?`<p>${p}</p>`:''}${link?`<a class="btn ghost" href="${link[1]}">${link[0]}</a>`:''}</div>`;
export const returnGrid=cells=>`<div class="return">${cells.map((c,i)=>`<div class="cell reveal" style="--i:${i}"><span class="n">${c.n}</span><h3>${c.t}</h3><p>${c.d}</p></div>`).join('')}</div>`;
export const pgrid=(cols,cells)=>`<div class="pgrid c${cols}">${cells.map((c,i)=>`<div class="pcell reveal" style="--i:${i}">${c.n?`<span class="pn">${c.n}</span>`:''}${c.t?`<h4>${c.t}</h4>`:''}<p>${c.d}</p></div>`).join('')}</div>`;
export const pts=(arr,cols)=>`<ul class="pts${cols?' cols':''}">${arr.map(i=>`<li>${i}</li>`).join('')}</ul>`;
export const workGrid=cards=>`<div class="wgrid">${cards.map((c,i)=>`
  <a class="wcard reveal" style="--i:${i}" href="${c.href}">
    <div class="wthumb">${c.graphic}</div>
    <div class="wbody">
      <span class="tag">${c.tag}</span>
      <h4>${c.head}</h4>
      <p>${c.body}</p>
      <span class="wret"><b>Return:</b> ${c.ret}</span>
    </div></a>`).join('')}</div>`;
export const caseBlocks=arr=>`<div class="cases">${arr.map((c,i)=>`
  <div class="case reveal" style="--i:${i%3}">
    <div class="cmeta"><span class="cnum">${String(i+1).padStart(2,'0')}</span><h3>${c.t}</h3><span class="tag">${c.area}</span></div>
    <div class="cbody">
      <div class="cpart"><span class="clbl">Challenge</span><p>${c.ch}</p></div>
      <div class="cpart"><span class="clbl">What we did</span><p>${c.ap}</p></div>
      <div class="cpart ret"><span class="clbl">The return</span><p>${c.ret}</p></div>
    </div></div>`).join('')}</div>`;

export function featInline(o){/* just the .feat block, no section wrapper */
  return `<div class="feat${o.flip?' flip':''}"${o.style?` style="${o.style}"`:''}>
    <div class="fx reveal"><div class="gpanel${o.bare?' bare':''}">${o.graphic}</div></div>
    <div class="reveal" style="--i:1">
      ${o.tag?`<span class="tag">${o.tag}</span>`:''}
      ${o.head?`<h3 class="fh">${o.head}</h3>`:''}
      ${o.body}
      ${o.retbar?`<div class="retbar"><b>Return:</b> ${o.retbar}</div>`:''}
      ${o.link?`<a class="tlink" href="${o.link[1]}">${o.link[0]}</a>`:''}
    </div></div>`;
}
export function feature(o){/* prose + graphic, wrapped in a section */
  return `<section class="${o.soft?'soft':''}"><div class="wrap">${featInline(o)}</div></section>`;
}
export function closing(h,sub){
  return `<section class="dark"><div class="wrap">
    <div class="shead reveal" style="margin-bottom:0;align-items:center">
      <div><span class="top lbl">${triad}Get in touch</span><h2>${h}</h2></div>
      <div class="actions" style="margin-top:0"><a class="btn" href="/contact">Start a conversation</a><a class="btn ghost" href="/work">See the outcomes</a></div>
    </div>${sub?`<p class="reveal" style="--i:1;max-width:54ch;margin-top:26px;font-weight:300">${sub}</p>`:''}</div></section>`;
}
export function page(o){
  return `<div class="phead"><div class="wrap">
    <span class="top lbl rise" style="--i:0">${triad}${o.crumb}</span>
    <h1 class="rise" style="--i:1">${o.title}</h1>
    ${o.lede?`<p class="lede rise" style="--i:2">${o.lede}</p>`:''}
    ${o.pill?`<div class="rise" style="--i:3"><span class="pill ${o.on?'on':''}">${o.pill}</span></div>`:''}
  </div></div>${o.body||''}${o.cta===false?'':closing(o.ctaText||'Tell us the number you are trying to move.')}`;
}
