/* =====================================================================
   ROUTES — canonical, indexable routes with per-page SEO metadata.
   Single source of truth for both the client router (sets document.title
   and meta on navigation) and the build-time prerenderer (writes one HTML
   file per route). Legacy aliases and mailto targets are intentionally
   NOT listed here — they resolve client-side but are not prerendered.
   ===================================================================== */
export const SITE = 'https://knexu.co.uk';
export const DEFAULT_DESC = 'Knexu is a strategic growth agency for sport, health and wellbeing. Measured on the return: new revenue, recovered margin and unlocked capital for academia, public and private organisations.';

export const ROUTES = {
  '/': {
    title: 'knexu. — strategic growth agency',
    description: DEFAULT_DESC
  },
  '/consultancy': {
    title: 'Consultancy — three areas, three sectors, one measure | Knexu',
    description: 'Strategy for sport, health and wellbeing, scoped to a financial return: grow revenue, recover margin or unlock capital. Our areas, sectors and how we engage.'
  },
  '/sport': {
    title: 'Sport — commercial revenue and athlete medical | Knexu',
    description: 'Sponsorship, matchday and medical-service revenue for governing bodies, clubs and tournaments — turning under-monetised sport assets into income.'
  },
  '/health': {
    title: 'Health — new revenue, faster access, unlocked capital | Knexu',
    description: 'Self-pay pathways, recovered capacity and defensible catchment analysis for independent diagnostics, NHS private patient units and provider groups.'
  },
  '/wellbeing': {
    title: 'Wellbeing — sustainable income and provable impact | Knexu',
    description: 'Income that is not grant-dependent, prevention pathways and impact evidence for community wellness and third-sector delivery.'
  },
  '/academia': {
    title: 'Academia — commercialised research and funded delivery | Knexu',
    description: 'Delivery plans, industry partnerships and monetised campus services that turn university research strength in sport and health into revenue.'
  },
  '/public': {
    title: 'Public organisations — tenders, capacity, PPU income | Knexu',
    description: 'Tender wins, recovered capacity and private-patient income for NHS trusts, local authorities and governing bodies, grown inside the public framework.'
  },
  '/private': {
    title: 'Private organisations — growth and market entry | Knexu',
    description: 'New revenue lines, market entry and better conversion for independent providers, clubs, operators and early-stage companies.'
  },
  '/work': {
    title: "Work & outcomes — the return, in the client's words | Knexu",
    description: 'Selected engagements across sport, health and wellbeing, framed by challenge and return — from Prime Health and Housden Group to Leeds Beckett and Eventmaster.'
  },
  '/digital': {
    title: 'Digital infrastructure — platforms that earn | Knexu',
    description: 'Three platforms of our own plus bespoke builds. DataLense, Straight Talking and Knexusport turn strategy into live, revenue-bearing assets.'
  },
  '/digital/datalense': {
    title: 'DataLense — healthcare commercial intelligence | Knexu',
    description: 'Drivetime catchment market scoring, competitor mapping and population health profiles for any UK site decision, before the capital is committed.'
  },
  '/digital/straight-talking': {
    title: 'Straight Talking — patient-reported outcomes | Knexu',
    description: 'One capture surface across the whole clinical journey, with PHIN and PROMs instruments layered on top. In build, launching October 2026.'
  },
  '/digital/knexusport': {
    title: 'Knexusport — athlete medical operations | Knexu',
    description: 'Blood panels, imaging coordination, medical directories and secure image transfer for clubs, governing bodies and tournaments, on one platform.'
  },
  '/digital/how-we-build': {
    title: 'How we build — shipping in slices | Knexu',
    description: "A small, senior team shipping usable slices with the client's own data model at the centre. No offshore body shop, no six-month silence."
  },
  '/insights': {
    title: 'Insights — where the sport and health markets are moving | Knexu',
    description: 'Views on self-pay demand, catchment analysis, patient-reported capture rates, and building the tool instead of writing the deck.'
  },
  '/insights/minshall-group': {
    title: 'Knexu is becoming Minshall Group | Knexu',
    description: 'Knexu is undertaking the sale of one of its assets and transitioning the brand and business to Minshall Group (minshallgroup.com). Same team, same approach, same measure: the return.'
  },
  '/about': {
    title: 'About — a growth agency measured on the return | Knexu',
    description: 'Knexu designs targeted strategies across sport, health and wellbeing, and builds the digital infrastructure that makes them earn.'
  },
  '/contact': {
    title: "Contact — tell us the number you're trying to move | Knexu",
    description: 'Start a conversation with Knexu. The outcome you want, the constraint in the way, and the date it has to change by.'
  }
};
