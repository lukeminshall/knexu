/* =====================================================================
   PAGES — the route map P. Each entry returns the page markup string.
   ===================================================================== */
import {GFX,gCatchment,gNetwork,gRidge,gGrid,gFunnel,gDial,gECG,gBracket,gArea,gRadar,gLayers} from './graphics';
import {AREAS,SECTORS,CASES} from './content';
import {triad,indexList,shead,returnGrid,pgrid,pts,workGrid,caseBlocks,feature,closing,page} from './components';

export const P={};

/* ---------------- HOME ---------------- */
P['/']=()=>`
<div class="hero"><div class="wrap">
  <div class="hero-grid">
    <div>
      <span class="top lbl rise" style="--i:0">${triad}Strategic growth agency</span>
      <h1 class="big rise" style="--i:1;margin-top:20px">Strategy measured by the <span class="uline">return</span>, not the recommendation<i style="font-style:normal;color:var(--pink)">.</i></h1>
      <p class="lede rise" style="--i:2">We work across sport, health and wellbeing, for academia, public and private organisations. Every engagement is scoped to a number: new revenue, recovered margin or unlocked capital. Where the strategy needs infrastructure that does not exist yet, we build that too, and it earns as well.</p>
      <div class="actions rise" style="--i:3"><a class="btn" href="#/work">See the outcomes</a><a class="btn ghost" href="#/consultancy">How we work</a></div>
    </div>
    <div class="rise" style="--i:2">${gCatchment()}</div>
  </div>
</div></div>

<section><div class="wrap">
  ${shead("The return","Three ways we move the number.","We do not sell activity. Every engagement is scoped to one of three financial outcomes, and we say which before we start.")}
  ${returnGrid([
    {n:"Return 01",t:"Grow revenue",d:"New revenue lines, better conversion of the demand you already have, and commercial assets that were never properly monetised."},
    {n:"Return 02",t:"Recover margin",d:"Reconfiguration that removes leakage and returns clinical, operational and commercial capacity to the work that pays."},
    {n:"Return 03",t:"Unlock capital",d:"Business cases and analysis that release investment, protect it from the wrong decision, and de-risk the next one."}
  ])}
</div></section>

<section class="soft"><div class="wrap">
  ${shead("Areas","Where we create it.","Three areas we know deeply enough to be accountable for the outcome, not just the advice.",["Consultancy overview","#/consultancy"])}
  ${indexList(Object.entries(AREAS).map(([k,v])=>({t:v.t,sub:v.sub,d:v.d,ret:v.ret,href:'#'+k})))}
</div></section>

<section><div class="wrap">
  ${shead("Sectors","Who we create it for.","The same three returns, delivered differently depending on who is buying and what the rules are.")}
  ${indexList(Object.entries(SECTORS).map(([k,v])=>({t:v.t,sub:v.sub,d:v.d,ret:v.ret,href:'#'+k})))}
</div></section>

<section class="soft"><div class="wrap">
  ${shead("Selected work","The difference, in the client's words.",null,["All outcomes","#/work"])}
  ${workGrid([
    {tag:"Health · Prime Health",head:"A new revenue line, not a report",graphic:gFunnel(),body:"Self-referral pathways that make diagnostic access faster, easier and more patient-led, removing the barriers at entry that capped direct demand.",ret:"a direct self-pay revenue line and higher conversion of existing demand.",href:"#/health"},
    {tag:"Sport · Eventmaster",head:"Every ticket, more revenue",graphic:gArea(),body:"A market entry and go-to-market strategy connecting ticketing with retail, fundraising and engagement, unlocking pre-sale and post-event opportunity.",ret:"revenue captured before, during and after the event.",href:"#/sport"},
    {tag:"Academia · Leeds Beckett",head:"Research, made fundable",graphic:gGrid(),body:"The business delivery plan for a new Sports and Health Technology Incubator: stakeholder engagement, knowledge development and delivery frameworks.",ret:"a roadmap built to unlock funding and industry partnership.",href:"#/academia"}
  ])}
</div></section>

<section><div class="wrap">
  ${shead("Digital infrastructure","When the return needs building.","Three platforms of our own. Each began as advisory work and became an asset that earns.",["The practice","#/digital"])}
  ${indexList([
    {t:"DataLense",sub:"Live · datalense.org",d:"Healthcare commercial intelligence: catchment-level market scoring, competitor mapping and a population health profile for any UK postcode.",ret:"better site decisions and capital protected from the wrong location.",href:"#/digital/datalense"},
    {t:"Straight Talking",sub:"Launching October 2026",d:"Patient-reported outcomes and experience across the whole clinical journey, built for PHIN and PROMs obligations.",ret:"a mandated obligation turned into an evidence asset for insurer and commissioner negotiation.",href:"#/digital/straight-talking"},
    {t:"Knexusport",sub:"In service",d:"Athlete medical operations for clubs, governing bodies and tournaments: bloods, imaging coordination, medical directories and secure image transfer.",ret:"medical provision run as a managed service instead of a scatter of ad-hoc cost.",href:"#/digital/knexusport"}
  ])}
</div></section>

${closing('Tell us the number you are trying to move.','A first conversation is thirty minutes and costs nothing. Bring the outcome you want, the constraint in the way, and the date it has to change by. If we are not the right people, we will say so.')}`;

/* ---------------- CONSULTANCY HUB ---------------- */
P['/consultancy']=()=>page({
  crumb:"Consultancy",title:"Three areas, three sectors, one measure.",
  lede:"Knexu is a strategic agency for sport, health and wellbeing. We are hired to move a financial number and to be able to show how. Everything below is organised around the return, not the activity.",
  body:`
  <section><div class="wrap">
    ${shead("The return","How we create it.","Three financial outcomes. We name which one an engagement is for before it starts, and report against it after.")}
    ${returnGrid([
      {n:"Return 01",t:"Grow revenue",d:"New lines, better conversion, and commercial assets finally monetised."},
      {n:"Return 02",t:"Recover margin",d:"Reconfiguration that removes leakage and returns capacity to the work."},
      {n:"Return 03",t:"Unlock capital",d:"Cases and analysis that release funding and de-risk the next investment."}
    ])}
  </div></section>
  <section class="soft"><div class="wrap">
    ${shead("Areas","What we work on.")}
    ${indexList(Object.entries(AREAS).map(([k,v])=>({t:v.t,sub:v.sub,d:v.d,ret:v.ret,href:'#'+k})))}
  </div></section>
  <section><div class="wrap">
    ${shead("Sectors","Who we work with.")}
    ${indexList(Object.entries(SECTORS).map(([k,v])=>({t:v.t,sub:v.sub,d:v.d,ret:v.ret,href:'#'+k})))}
  </div></section>
  <section class="soft"><div class="wrap">
    ${shead("How we engage","Four things we hold to.")}
    ${pgrid(2,[
      {n:"01",t:"Name the number first",d:"Before scoping, we agree the outcome an engagement is accountable for and how it will be measured. A strategy with no number attached is a slide deck, and we do not sell slide decks."},
      {n:"02",t:"Diagnosis before prescription",d:"We establish what is actually true: where demand comes from, where work waits, and what the market looks like from the customer's side. The honest version is worth more."},
      {n:"03",t:"Senior people, on the work",d:"The people in the first meeting are the people doing the work. Specialist depth comes from an associate with defined scope, not a junior bench."},
      {n:"04",t:"Leave something that earns",d:"Where the recommendation needs a tool, a pathway or a platform to be real, we build it. Three of our platforms started exactly this way and now generate revenue."}
    ])}
  </div></section>`,
  ctaText:"Which of the three returns are you after?"
});

function areaSectorPage(v){
  return page({crumb:"Consultancy · "+(v.sub==="Area"?"Areas":"Sectors"),title:v.t,lede:v.d,
    body:`
    ${feature({tag:v.sub,graphic:GFX[v.gfx](),body:v.body.map(p=>`<p>${p}</p>`).join(''),retbar:v.ret})}
    <section class="soft"><div class="wrap">
      ${shead("The return","Three outcomes in "+v.t.toLowerCase()+".")}
      ${pgrid(3,v.returns)}
      <p class="lbl reveal" style="margin-top:30px">Selected work: ${v.work.join(" · ")}</p>
    </div></section>`,
    ctaText:`What is the return you need in ${v.t.toLowerCase()}?`});
}
Object.values(AREAS).forEach(v=>P['/'+v.t.toLowerCase().replace(/ .*/,'')]=()=>areaSectorPage(v));
P['/sport']=()=>areaSectorPage(AREAS['/sport']);P['/health']=()=>areaSectorPage(AREAS['/health']);P['/wellbeing']=()=>areaSectorPage(AREAS['/wellbeing']);
P['/academia']=()=>areaSectorPage(SECTORS['/academia']);P['/public']=()=>areaSectorPage(SECTORS['/public']);P['/private']=()=>areaSectorPage(SECTORS['/private']);

/* ---------------- WORK ---------------- */
P['/work']=()=>page({
  crumb:"Work &amp; outcomes",title:"The work, and the difference it made.",
  lede:"A sample of engagements across sport, health and wellbeing. Each one is framed the way we scope it: the challenge, and the return.",
  body:`<section><div class="wrap">${caseBlocks(CASES)}
    <p class="lbl reveal" style="margin-top:34px">Return figures are confirmed with each client before publication</p></div></section>`,
  ctaText:"Want an outcome like one of these?"
});
P['/case-studies']=P['/work'];

/* ---------------- DIGITAL ---------------- */
P['/digital']=()=>page({
  crumb:"Digital infrastructure",title:"When the return needs something built.",
  lede:"Three platforms of our own, plus bespoke builds for clients. Each turns a strategy into a live, revenue-bearing asset rather than a document that describes one.",
  body:`
  <section><div class="wrap">
    ${shead("Platforms","What we own and operate.",null,["How we build","#/digital/how-we-build"])}
    ${indexList([
      {t:"DataLense",sub:"Live · datalense.org",d:"Healthcare commercial intelligence. Four live toolkits over any UK drivetime catchment: health commercials, population health, workforce and market trends.",ret:"sharper site decisions and capital protected from the wrong location.",href:"#/digital/datalense"},
      {t:"Straight Talking",sub:"Launching October 2026",d:"Patient-reported outcomes and experience across the whole clinical journey, built for PHIN and PROMs reporting obligations.",ret:"a compliance obligation turned into an evidence asset for negotiation.",href:"#/digital/straight-talking"},
      {t:"Knexusport",sub:"In service",d:"Athlete medical operations for clubs, governing bodies and tournaments. Blood panels, imaging coordination, medical directories and secure image transfer.",ret:"medical run as a managed service, not scattered ad-hoc cost.",href:"#/digital/knexusport"}
    ])}
  </div></section>
  <section class="soft"><div class="wrap">
    ${shead("Bespoke builds","What we build for clients.","Not every problem needs a product. Most need one missing piece, built properly and handed over with the keys, so a strategy stops depending on a spreadsheet.")}
    ${pts([
      "<b>Patient-facing booking and referral front ends</b>, built against the clinical system you already run, so self-pay stops being a phone call and starts being revenue.",
      "<b>Commercial intelligence dashboards</b> that pull site, catchment, competitor and activity data into one place a board can read in ten minutes.",
      "<b>Operational reporting</b> for referral-to-report pathways: where work sits, how long it has waited, and what it is costing.",
      "<b>Integration work</b> across clinical systems, imaging, CRM and finance, so data stops being retyped and starts being trusted.",
      "<b>Data pipelines and reference sets</b>: public health, workforce, provider registration and deprivation data, cleaned and kept current."
    ],true)}
  </div></section>
  <section><div class="wrap">
    ${shead("Principles","Four rules we do not break.")}
    ${pgrid(2,[
      {n:"01",t:"Honest degradation",d:"When a data source fails, the answer says so. A missing number is safer than a plausible-looking wrong one, and every figure carries its own coverage status."},
      {n:"02",t:"Production, not demo",d:"Everything ships to a real environment with real authentication, access control and an audit trail. Prototypes are for deciding, not for running a service on."},
      {n:"03",t:"You own the data model",d:"Schema, migrations, exports and documentation belong to the client. Integration should not be a synonym for capture."},
      {n:"04",t:"Ship in slices",d:"One capability at a time, each usable and earning on its own. Nothing sits in a six-month build with no outcome until the end."}
    ])}
  </div></section>`,
  ctaText:"Something in the operation that only works because one person remembers how?"
});

P['/digital/datalense']=()=>page({
  crumb:"Digital infrastructure · Platform",title:"DataLense",
  lede:"Healthcare commercial intelligence. Where the next site should go, who is already there, and what the population around it actually needs, before the capital is committed.",
  pill:"Live at datalense.org",on:true,
  body:`
  ${feature({head:"The wrong site is the most expensive mistake in the sector",graphic:gRadar(),body:`<p>Site selection in independent healthcare is usually decided on instinct, a rent quote and whatever someone already knows about the town. The data to do it properly exists but sits across CQC registers, ONS census tables, deprivation indices, waiting-time publications and workforce returns, in different geographies and on different update cycles.</p><p>DataLense answers it at the level a commercial decision is actually made: a drivetime catchment around a postcode.</p>`,retbar:"capital committed with evidence, and protected from the location that would have quietly under-performed for a decade."})}
  <section class="soft"><div class="wrap">
    ${shead("What you get","Four things in every dossier.")}
    ${pts([
      "<b>A catchment, not a radius.</b> Real drivetime isochrones, so the analysis reflects how people would genuinely travel to the site.",
      "<b>A market score</b> across twelve dimensions in four groups, weighted by the profile that matches the service you are planning.",
      "<b>A population health profile</b>: how the neighbourhood deviates from a national sample of comparison catchments, ranked, with no invented composite index.",
      "<b>A shareable dossier</b> covering provider landscape through to workforce, sent as a time-limited link rather than a PDF that leaks."
    ],true)}
  </div></section>
  <section><div class="wrap">
    ${shead("Toolkits","Four toolkits, one catchment.","All four are live. Each answers a different question about the same drivetime catchment, and the underlying data is expanding continuously.")}
    ${indexList([
      {t:"Health Commercials",d:"Competitor and provider landscape, activity and waiting-time pressure, catchment demographics and a weighted market score, ranked against comparable commercial locations.",href:"#/contact"},
      {t:"Population Health",d:"Disability, long-term conditions, qualifications, car dependency and overcrowding, expressed as ranked deviations from a national sample of 200 comparison catchments.",href:"#/contact"},
      {t:"Workforce",d:"Clinical and support workforce availability and pressure across the catchment, so a site decision accounts for whether it can actually be staffed.",href:"#/contact"},
      {t:"General Trends",d:"Wider market movement, demand and activity trends shaping the catchment over time, so the picture is not just a single snapshot.",href:"#/contact"}
    ])}
    <p class="lbl reveal" style="margin-top:26px">New datasets are added on a rolling basis as sources are verified</p>
  </div></section>
  ${feature({soft:true,flip:true,head:"We would rather say nothing than say something wrong",graphic:gRidge(),body:`<p>Every figure in a DataLense dossier carries a coverage status. If the routing service cannot resolve a catchment, the polygon-derived numbers come back empty with the reason attached, while postcode-level data still resolves. You get a partial answer that knows it is partial, which is the only kind worth committing capital against.</p><p>The same discipline applies to language. The national comparison set is a sample of 200 catchments drawn across England, and the copy says exactly that. It does not claim "representative", because the sample is not stratified. When it is, the wording changes.</p>`})}`,
  ctaText:"Want a catchment run on a site you are considering?"
});

P['/digital/straight-talking']=()=>page({
  crumb:"Digital infrastructure · Platform",title:"Straight Talking",
  lede:"The patient-reported spine for a whole clinical journey. One capture surface from first contact to outcome, with the mandated instruments layered on top of it.",
  pill:"In build · launching October 2026",
  body:`
  ${feature({head:"A compliance cost, turned into a negotiating asset",graphic:gLayers(),body:`<p>Most providers collect patient feedback at one point, usually the end, usually by email, usually from the small share who still respond. The result satisfies a reporting requirement and tells the organisation almost nothing it can act on, or sell on.</p><p>Straight Talking treats the patient's view as a continuous record across the journey. The mandated reporting is handled, and the resulting outcome evidence becomes a genuine asset in negotiations with insurers and commissioners, where it belongs to you rather than to them.</p>`,retbar:"a mandated obligation turned into outcome evidence you own and can negotiate with."})}
  <section class="soft"><div class="wrap">
    ${shead("Why now","Four reasons the timing is not optional.")}
    ${pts([
      "<b>PHIN and the CMA order.</b> Full implementation lands in 2026, and patient-reported measures are part of what independent providers must publish.",
      "<b>PROMs site participation reporting</b> makes capture rate itself a published metric, not just a data quality problem.",
      "<b>NHS contractual PROMs</b> apply the same expectation to NHS-funded activity in independent settings.",
      "<b>Value-based healthcare</b> arguments with insurers need outcome evidence that belongs to the provider."
    ],true)}
  </div></section>
  <section><div class="wrap">
    ${shead("Positioning","Where we differ.","The market splits into outcome-measure specialists and experience-survey tools. The gap, and the value, is in the middle.")}
    ${indexList([
      {t:"Capture rate first",d:"A validated instrument at a 12% response rate is weaker evidence than a well-designed journey capture at 60%. We optimise the surface, then layer the instruments onto it.",href:"#/contact"},
      {t:"Whole journey, one spine",d:"Experience and outcome sit on the same record, so you can see which parts of the pathway move the outcome rather than guessing.",href:"#/contact"},
      {t:"Mandated measures included",d:"PHIN and PROMs instruments are configuration on the existing spine, not a second system bolted alongside it.",href:"#/contact"}
    ])}
  </div></section>
  ${feature({soft:true,flip:true,head:"Built, demonstrable, launching October 2026",graphic:gDial(),body:`<p>The platform is a working codebase with a connected demo loop: submissions from the patient app appear live in the provider dashboard. We are running structured demonstrations with provider groups now, ahead of first-cohort launch.</p><p>If you report to PHIN, hold NHS contracts with PROMs obligations, or are building an outcomes case for an insurer negotiation, the first cohort is the conversation to have.</p>`})}`,
  ctaText:"Join the October launch cohort."
});

P['/digital/knexusport']=()=>page({
  crumb:"Digital infrastructure · Platform",title:"Knexusport",
  lede:"Athlete medical operations and tournament management for clubs, governing bodies and competitions. Blood panels, imaging coordination, medical directories and secure image transfer on one platform.",
  pill:"In service",on:true,
  body:`
  ${feature({head:"Medical as a managed service, not a scatter of invoices",graphic:gECG(),body:`<p>Elite sport medical provision is coordinated by email. A player needs a scan, someone rings three providers, someone else chases the images, the report arrives as an attachment, and the club's medical record becomes whatever the physio saved to a shared drive. Every step is cost and risk.</p><p>Knexusport puts the whole flow in one place: the request, the provider, the appointment, the images, the report, and the athlete record it belongs to.</p>`,retbar:"predictable cost, faster turnaround, and a defensible medical record instead of a liability."})}
  <section class="soft"><div class="wrap">
    ${shead("What it handles","Four operations on one platform.")}
    ${pts([
      "<b>Blood panels</b> from order through to results against the athlete record, including squad-wide screening rounds.",
      "<b>Imaging coordination</b> across a provider network, with dispatch, tracking and turnaround visibility per case.",
      "<b>Tournament medical directories</b>: who provides what, where, in each host city, available to visiting team doctors before they land.",
      "<b>Image transfer</b> as signed, short-lived, single-user links into the provider's own system, logged and revocable, rather than files sitting in an inbox."
    ],true)}
  </div></section>
  <section><div class="wrap">
    ${shead("Delivery","Who uses it.","Professional football, cricket and rugby, plus national governing bodies and individual athlete clients.")}
    <div class="strip" style="margin-top:0;border-top:1px solid var(--line)">
      <div class="reveal" style="--i:0"><b>PL</b><span>Premier League football</span></div>
      <div class="reveal" style="--i:1"><b>EFL</b><span>English Football League</span></div>
      <div class="reveal" style="--i:2"><b>ECB</b><span>Cricket</span></div>
      <div class="reveal" style="--i:3"><b>WR</b><span>World Rugby</span></div>
    </div>
  </div></section>
  ${feature({soft:true,flip:true,head:"Tournament scale, and partner-run",graphic:gBracket(),body:`<p>A tournament module has been built for a full national-team competition: provider directory, host-city guides and national team reporting. The next phase opens partner administration, so a university or provider partner maintains their own service catalogue rather than sending us a spreadsheet.</p><p>Concussion and head injury assessment pathways sit deliberately outside current scope pending a medical device regulatory opinion. We would rather be late than become a regulated device by accident.</p>`})}`,
  ctaText:"Running medical for a squad, a tournament or a governing body?"
});

P['/digital/how-we-build']=()=>page({
  crumb:"Digital infrastructure",title:"How we build.",
  lede:"A small, senior team shipping in slices, with the client's own data model at the centre of it. No offshore body shop, no six-month silence, and every slice earns before the next one starts.",
  body:`
  <section><div class="wrap">
    ${shead("Model","Four disciplines.")}
    ${pgrid(2,[
      {n:"01",t:"One capability at a time",d:"Work is scoped into slices that each deliver a usable outcome. A booking front end goes live for one service line before twelve. If the programme stops after slice two, slices one and two are still in service and still returning."},
      {n:"02",t:"Scope is locked, then defended",d:"We agree a phase scope and hold a moratorium on additions for a fixed window. Good ideas get logged and dated rather than absorbed. It is the most reliable way to make a delivery date, and a budget, mean something."},
      {n:"03",t:"Verification before deploy",d:"Every feature is checked against reality before it ships. Where a number is derived from an external service, we test it against a known sample. We have dropped two of our own data providers at this gate."},
      {n:"04",t:"The client owns the model",d:"Schema, migrations, exports and documentation are the client's. Where we host, we hand over the runbook. Where you host, we build to your environment."}
    ])}
  </div></section>
  <section class="soft"><div class="wrap">
    ${shead("Delivery","What a build looks like.")}
    ${indexList([
      {t:"Weeks 1 to 2 · Decide",d:"Surface map, data model and the one question the thing has to answer. Written down and signed off before a line of code.",href:"#/contact"},
      {t:"Weeks 3 to 8 · First slice",d:"First usable capability into a production environment with real authentication and access control. Demonstrated live, not screenshotted.",href:"#/contact"},
      {t:"Ongoing · Extend or hand over",d:"Further slices on the same spine, or handover to your team with the keys, the schema and the documentation.",href:"#/contact"}
    ])}
  </div></section>`,
  ctaText:"Bring us the piece that keeps not getting built."
});

/* ---------------- INSIGHTS / ABOUT / CONTACT ---------------- */
P['/insights']=()=>page({
  crumb:"Insights",title:"Insights.",lede:"Where we think the sport and health markets are moving, and what it means for the return.",
  body:`<section><div class="wrap">${indexList([
    {t:"Health in 2026",d:"Self-pay is no longer a recession hedge. What sustained direct-to-consumer demand means for capacity planning, pricing and estate strategy.",href:"#/health"},
    {t:"Your catchment is probably wrong",d:"A five-mile radius is not a catchment. Two providers a mile apart can serve entirely different populations, and drivetime sometimes changes the decision.",href:"#/digital/datalense"},
    {t:"The capture-rate problem nobody names",d:"A validated outcome measure at a 12% response rate is weaker evidence than an unvalidated one at 60%. The sector optimised the instrument and ignored the surface.",href:"#/digital/straight-talking"},
    {t:"Build the tool or write the deck",d:"Consultancies default to the deck because it is the billable artefact. If the recommendation only works when someone runs the analysis monthly, the deck is the wrong deliverable.",href:"#/digital"}
  ])}</div></section>`
});
P['/featured-insights']=P['/insights'];P['/our-approach']=P['/consultancy'];P['/talk']=P['/insights'];

P['/about']=()=>`
<div class="phead"><div class="wrap">
  <span class="top lbl rise" style="--i:0">${triad}About</span>
  <h1 class="rise" style="--i:1">A growth agency that is measured on the return.</h1>
  <p class="lede rise" style="--i:2">Knexu Limited designs targeted, sustainable strategies that expand market reach, optimise operations and secure competitive advantage across sport, health and wellbeing.</p>
</div></div>
${feature({graphic:gNetwork(),body:`<p>With expertise spanning sport, healthcare services and community wellbeing, we bring a cross-sector perspective to every project. Patterns move between these three areas constantly, and that is where most of the useful ideas come from.</p><p>An extensive network of associates lets us provide strategic insight and then implement it. Those partnerships give access to specialist expertise and resources, and let us work at a scale well beyond the core team.</p><p>Over the last two years the practice has added a second half. <strong>Digital infrastructure</strong>: platforms we own and operate, plus bespoke builds. Every one started as a client problem we could not solve with a document, and each now earns in its own right.</p>`})}
<section class="soft"><div class="wrap">
  ${shead("Partnerships","Who we work with.")}
  ${pts([
    "<b>Medical Imaging Partnership</b> — enhanced patient pathways, improved accessibility and refined service efficiency across diagnostic imaging.",
    "<b>Prime Health</b> — new growth opportunities, emerging revenue streams and a strengthened market position.",
    "<b>Housden Group</b> — NHS private patient unit optimisation for both NHS and private patients.",
    "<b>Eventmaster</b> — market entry strategy and in-depth research for grassroots and non-elite sports events.",
    "<b>Leeds Beckett University</b> — business delivery plan for a Sports and Health Technology Incubator.",
    "<b>Northumbria University (Newcastle)</b> — monetising campus services, turning facilities and expertise into sellable offerings.",
    "<b>Technique Health</b> — structural challenges resolved and client engagement redefined for market expansion.",
    "<b>Propel Teams</b> — mentorship and a structured route to market for their start-up cohort.",
    "<b>The Sponsor Collective</b> — sponsorship frameworks for clubs from grassroots to elite."
  ],true)}
</div></section>
${feature({soft:false,flip:true,tag:"Our platforms",head:"Three products that earn",graphic:gArea(),body:`<p>Knexu develops and operates its own products where a market gap is clear and the advisory work has already proven the need.</p><p><strong>DataLense</strong> is live, delivering healthcare commercial intelligence. <strong>Straight Talking</strong> launches in October 2026 as a patient-reported outcomes platform. <strong>Knexusport</strong> is in service across professional football, cricket and rugby.</p>`,link:["The practice","#/digital"]})}`;

P['/contact']=()=>`
<div class="phead"><div class="wrap">
  <span class="top lbl rise" style="--i:0">${triad}Contact</span>
  <h1 class="rise" style="--i:1">Tell us the number you are trying to move.</h1>
  <p class="lede rise" style="--i:2">The outcome you want, the constraint in the way, and the date it has to change by. We will tell you honestly whether we are the right people for it.</p>
</div></div>
<section><div class="wrap">
  ${shead("Start here","Send us a note.","Name, email and the messy version of what you are trying to move. It comes straight to us, and we usually reply within a day or two.")}
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" id="contact-form" class="cform reveal">
    <input type="hidden" name="form-name" value="contact">
    <p class="hp" hidden><label>Leave this field empty <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
    <div class="cfield">
      <label for="cf-name">Your name</label>
      <input id="cf-name" name="name" type="text" required autocomplete="name">
    </div>
    <div class="cfield">
      <label for="cf-email">Email</label>
      <input id="cf-email" name="email" type="email" required autocomplete="email">
    </div>
    <div class="cfield">
      <label for="cf-org">Organisation <span class="opt">optional</span></label>
      <input id="cf-org" name="organisation" type="text" autocomplete="organization">
    </div>
    <div class="cfield">
      <label for="cf-msg">The outcome, the constraint, and the date it has to change by</label>
      <textarea id="cf-msg" name="message" rows="5" required></textarea>
    </div>
    <button class="btn" type="submit">Send it over</button>
    <p class="cform-status" role="status" aria-live="polite"></p>
  </form>
</div></section>
<section class="soft"><div class="wrap">
  ${shead("Or email us directly","Straight to the inbox.")}
  ${indexList([
    {t:"hello@knexu.co.uk",d:"New enquiries, consultancy engagements, partnerships and press.",href:"mailto:hello@knexu.co.uk"},
    {t:"digital@knexu.co.uk",d:"DataLense access, Straight Talking cohort places, Knexusport and bespoke builds.",href:"mailto:digital@knexu.co.uk"}
  ])}
</div></section>`;

P['/404']=()=>page({crumb:"Not found",title:"That page does not exist.",lede:"The link is wrong or the page has moved.",
  body:`<section><div class="wrap">${indexList([
    {t:"Consultancy",d:"Three areas, three sectors, one measure.",href:"#/consultancy"},
    {t:"Digital infrastructure",d:"Our platforms and bespoke builds.",href:"#/digital"},
    {t:"Work",d:"Outcomes we have delivered.",href:"#/work"}
  ])}</div></section>`});

/* legacy */
P['/healthcare']=P['/health'];P['/charities']=P['/wellbeing'];P['/ticketing']=P['/sport'];
P['/data']=P['/consultancy'];P['/growth']=P['/consultancy'];P['/market']=P['/consultancy'];P['/networks']=P['/consultancy'];P['/proposal']=P['/consultancy'];P['/service']=P['/consultancy'];
P['/industries']=P['/consultancy'];P['/capabilities']=P['/consultancy'];P['/ourway']=P['/work'];P['/about-us']=P['/about'];
