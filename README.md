# O-R-G-dapp

> Next.js + web3 dApp for the Octagon Research Group and Spirituality Centers — founder
> **Tripp Aardema** ([orgspirituality.org](https://orgspirituality.org)).

[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat)](LICENSE)
[![Public Preview](https://img.shields.io/badge/%F0%9F%8C%90%20Public%20Preview-Available-brightgreen)](https://drasticstatic.github.io/O-R-G-dapp-public-preview/)
[![Sync](https://github.com/drasticstatic/O-R-G-dapp/actions/workflows/sync-public-allowlist.yml/badge.svg)](https://github.com/drasticstatic/O-R-G-dapp/actions/workflows/sync-public-allowlist.yml)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview)
[![Status](https://img.shields.io/badge/Status-%F0%9F%8C%B1%20Early%20Scaffold-orange)](https://github.com/drasticstatic/O-R-G-dapp)

---

**🌐 [Explore the Public Preview →](https://drasticstatic.github.io/O-R-G-dapp-public-preview/)**

---

## 👋 What this is

A rebuild of ORG's site (previously a Grok-built demo at orgspirituality.org) as a proper Next.js
application, with an early web3 layer: wallet connect, a crypto donation flow, and a soulbound-
membership concept. Content — mission, beliefs, community, infrastructure, research, and legal
framing — is drawn from the founder's own draft document and condensed for the web.

This is an **early scaffold**: the web3 features are wired up but point at placeholder addresses and
IDs until ORG designates real ones (see `src/lib/web3-config.ts`).

## 🔒 Private / Public split

This repo is **private** and is the source of truth. A public sibling,
[`O-R-G-dapp-public-preview`](https://github.com/drasticstatic/O-R-G-dapp-public-preview), mirrors
only what's explicitly allowlisted, pushed automatically by
[`sync-public-allowlist.yml`](.github/workflows/sync-public-allowlist.yml) on every push to `main` —
same pattern as [`gratitude-token-project`](https://github.com/drasticstatic/gratitude-token-project)
→ [`gratitude-token-project_astro`](https://github.com/drasticstatic/gratitude-token-project_astro).

Everything not named in the sync workflow's `public_allowlist` stays private by default, including
this repo's agent orchestration files (`AGENT-SYNC-O-R-G-dapp/`, `CLAUDE.md`, `AGENTS.md`, `.claude/`,
`.githooks/`, `scripts/`).

Sidecar site: [`O-R-G-astro`](https://github.com/drasticstatic/O-R-G-astro) (changelog-as-content),
mirrored to `O-R-G-astro-public`.

## 💻 Local development

```bash
npm install
npm run dev       # dev server (Next.js, webpack mode)
npm run build     # static export to out/
npm run start     # serve a production build (non-static mode)
```

Requires Node.js `>=20`. Fresh clone? Also run `sh scripts/install-hooks.sh` for commit-attribution
enforcement — see [`scripts/README.md`](./scripts/README.md) if present, or
[`CLAUDE.md`](./CLAUDE.md).

### Web3 environment variables

| Variable | Purpose | Status |
|---|---|---|
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect/Reown project ID | Placeholder — get one free at [cloud.reown.com](https://cloud.reown.com) |
| `NEXT_PUBLIC_DONATION_ADDRESS` | Treasury address for the `/give` crypto donation flow | Placeholder — **do not send funds to the default address** |
| `NEXT_PUBLIC_BASE_PATH` | GitHub Pages project-page subpath, e.g. `/O-R-G-dapp-public-preview` | Set by the deploy workflow |

## 🏗️ Structure

```
src/app/         Next.js App Router pages (About, Beliefs, Community, Infrastructure,
                  Research, Legal, Future Ideas, Give, Join, Home)
src/components/  Header/Footer, web3 Providers, DonateForm, shared page layout
src/lib/         wagmi/RainbowKit config, nav data
public/          Static assets
```

---

*Built and maintained by [drasticstatic](https://github.com/drasticstatic) · w/ Anthropic's Claude
Code CLI*
