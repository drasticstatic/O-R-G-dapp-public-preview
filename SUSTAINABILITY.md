# 🌱 Sustainability: what keeps the dApp preview running

> The full, current version, covering this dApp preview and the drasticstatic ORG lab, is a page:
> **[drasticstatic.github.io/O-R-G-astro-public/sustainability](https://drasticstatic.github.io/O-R-G-astro-public/sustainability)**.
> ORG's own sites are on the
> [ORG AstroLog's sustainability page](https://octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability).
> This file lists what applies to **this repository**, so it's here even when you're reading the code.

Nothing here costs money. What it takes is a few things that quietly expire or drift, written down
so none of it depends on anyone's memory.

## What this repository is

`drasticstatic/O-R-G-dapp` (private) is the source of the
[O-R-G dApp preview](https://drasticstatic.github.io/O-R-G-dapp-public-preview/), a Next.js static
export: `deploy-pages.yml` builds and publishes it, and `sync-public-allowlist.yml` mirrors the
allowlisted source to `O-R-G-dapp-public-preview`. It loads ORG's arrival kit (light, motion, the
welcome guide, Reach out and Community) from ORG's portal by URL.

## What needs looking after

| What | Why it matters | What to do |
| --- | --- | --- |
| **The publishing token** (`PUBLIC_REPO_TOKEN`) | A classic personal access token pushes the build to the public twin. When it expires, the preview stops updating with no sign on the site. | Before it expires, make a new classic token (`repo` + `workflow`), update the secret, run both workflows once. |
| **The gift page's address** | `/give` runs on a placeholder address until ORG designates and verifies a real one. | Never present the gift flow as live while the address is a placeholder. No real or example address is ever put on ORG's own pages. |
| **ORG's kit, loaded by URL** | Reach out, Community (ORG's four Telegram chats) and the welcome guide come from ORG's `org.js`. | Nothing, unless ORG's kit adds a key the preview wants; kit upgrades land on ORG's portal first. |

## 🔌 Wallet connect (Reown project)

The preview's wallet connect runs on a **Reown project**: the `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
secret here. It's **shared by every org today: `00b6a1cd528ff580f1fd845ed08b0187`**, made for this
dApp and held in Christopher W's Reown account. Giving with crypto and the kit 1.4 pledge of support
on ORG's portal (and the other orgs' portals) connect through it too; its allowlist lists all five org
origins plus `https://drasticstatic.github.io`. If it's deleted, suspended or runs past its free-plan
limit, wallet connect stops on every site at once (each page then says so calmly; nothing breaks).

*What to do:* ORG gets its own project with a **one-line `org.js` change** on ORG's portal
(`give.reownProjectId`, which the pledge uses too); this preview follows by updating the
`NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` secret and rebuilding. Create the project at dashboard.reown.com
under an account ORG controls, allowlist every origin that uses it, and do it before ORG publishes a
treasury address.

## 🤝 Stewardship and succession

**Today, one person holds every key here.** This repository and its public twin live in drasticstatic's
own GitHub account (Christopher W), which holds the publishing token and the Reown account above.
That's a single point of failure: if he stepped away, the token would expire on schedule and the
preview would quietly stop updating. The plan, so this work outlives any one person: a home in ORG's
organization if ORG wants to keep it, with at least two owners from ORG's own people; publishing
through org-owned automation instead of a personal token; a token register and renewal runbook;
written hand-over steps (this repository, its Pages site, the Reown project); and scheduled backups.
Details and progress: the lab's
[sustainability](https://drasticstatic.github.io/O-R-G-astro-public/sustainability) page and
[roadmap](https://drasticstatic.github.io/O-R-G-astro-public/roadmap).

*Maintained by Christopher W with Alfred (Claude Code). Last reviewed 2026-10-22.*
