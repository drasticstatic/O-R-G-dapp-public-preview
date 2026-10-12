// ORG's arrival kit, loaded by absolute URL from ORG's own site (the same files the ORG portal,
// AstroLog and the drasticstatic ORG lab use), so the dApp preview feels like part of one suite:
// the first-visit "Choose how you arrive", the light & motion controls and drawer, reading mode,
// contrast, cursor effects, the welcome guide, "/" search, and "new since your last visit".
//
// The dApp keeps its own design tokens and fonts (globals.css), which carry the same names the kit
// reads, so it loads arrival.css + org.js + arrival.js but not ORG's org.css; ORG's octagon shape
// rules for the kit are copied into globals.css. Choices live under ORG's "org-experience" key, the
// same key this app's experience store uses, so they carry between this preview and the lab.
export const ORG_SITE = "https://octagon-religious-research-group-org.github.io/";
export const ORG_KIT = `${ORG_SITE}arrival`;
export const ORG_LOG = `${ORG_SITE}changelog-astro-public/`;
export const LAB = "https://drasticstatic.github.io/O-R-G-astro-public/";
export const LAB_CHANGELOG = `${LAB}changelog/`;
export const DAPP = "https://drasticstatic.github.io/O-R-G-dapp-public-preview/";
export const DIRECTIONS = `${ORG_LOG}three-directions`;

// This site's entry in the kit (window.ARRIVAL_SITE, read before arrival.js runs).
export const DAPP_SITE = {
  name: "the O-R-G dApp preview",
  what: "This is the O-R-G dApp preview from Christopher's drasticstatic ORG lab: a web3-ready take on orgspirituality.org, with ORG's own art and words, the beliefs and their tallies, and a wallet-connect gift. It's a preview, not ORG's official site, and your light and motion carry over to the lab.",
  record: {
    intro: "This preview's changes are recorded in Christopher's lab; ORG's own sites have their record in the ORG AstroLog.",
    changelog: {
      name: "The lab's changelog",
      text: "What changed in this preview and the lab, newest first, each entry with its own page.",
      href: LAB_CHANGELOG,
      label: "Read the lab changelog",
    },
    library: {
      name: "ORG's official record",
      text: "The ORG AstroLog: the official changelog for ORG's own repositories, with a library of how they're built.",
      href: ORG_LOG,
      label: "Open the ORG AstroLog",
    },
    ledger: {
      name: "The lab's ledger",
      text: "Every public change to this preview and the lab, in plain words, linked to the change itself.",
      href: `${LAB}ledger/`,
      label: "Open the lab's ledger",
    },
  },
  news: { sources: [`${LAB}latest.json`] },
  sources: [
    { url: `${LAB}search.json`, label: "Lab" },
    { url: `${ORG_LOG}search.json`, label: "ORG AstroLog", people: false },
  ],
  items: [
    { t: "dApp preview home", k: "dApp", i: "cube", h: DAPP, pin: true, x: "home octagon wheel sheet" },
    { t: "The lab's changelog", k: "lab", i: "clock-counter-clockwise", h: LAB_CHANGELOG, pin: true, x: "history changes dapp" },
    { t: "Beliefs", k: "dApp", i: "scales", h: `${DAPP}beliefs`, x: "vote majority tallies" },
    { t: "Give to ORG", k: "dApp", i: "gift", h: `${DAPP}give`, x: "donate crypto wallet ethereum gift" },
    { t: "Join", k: "dApp", i: "hand-heart", h: `${DAPP}join`, x: "membership member" },
    { t: "Three directions, living together", k: "ORG AstroLog", i: "compass-tool", h: DIRECTIONS, x: "renan design directions history three lights feedback" },
  ],
};
