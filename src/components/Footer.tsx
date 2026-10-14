import Link from "next/link";
import { SHEET_ORDER, sectionById } from "@/lib/sections";
import { OctagonMark } from "@/components/OctagonMark";
import {
  DIRECTIONS,
  LAB,
  LAB_CHANGELOG,
  LAB_ROADMAP,
  LAB_SUSTAINABILITY,
  ORG_COMMUNITY,
  ORG_CONTACT,
  ORG_DONATE,
  ORG_LOG,
  ORG_SITE,
} from "@/lib/arrival";

const NAV = SHEET_ORDER.filter((id): id is string => id !== null).map(sectionById);

// Every footer link carries an icon beside its words, like the navbar on ORG's sites (kit 1.2).
// Community and Reach out open the kit's windows (ORG's own, from org.js); the hrefs are the
// no-JavaScript fallback.
type FootLink = { href: string; label: string; icon: string; open?: "community" | "contact" | "guide" };
const GROUPS: { label: string; icon: string; links: FootLink[] }[] = [
  {
    label: "Get involved",
    icon: "hand-heart",
    links: [
      { href: "/join", label: "Join", icon: "hand-heart" },
      { href: ORG_COMMUNITY, label: "Where ORG gathers", icon: "chats-circle", open: "community" },
      { href: ORG_CONTACT, label: "Reach out", icon: "envelope-simple", open: "contact" },
      { href: ORG_DONATE, label: "Donate to ORG", icon: "heart" },
      { href: "#welcome", label: "Welcome guide", icon: "signpost", open: "guide" },
    ],
  },
  {
    label: "The lab",
    icon: "flask",
    links: [
      { href: LAB, label: "The drasticstatic ORG lab", icon: "flask" },
      { href: LAB_CHANGELOG, label: "Lab changelog", icon: "clock-counter-clockwise" },
      { href: `${LAB}ledger`, label: "Lab ledger", icon: "scroll" },
      { href: LAB_ROADMAP, label: "Roadmap", icon: "path" },
      { href: LAB_SUSTAINABILITY, label: "Sustainability", icon: "plant" },
    ],
  },
  {
    label: "ORG",
    icon: "polygon",
    links: [
      { href: "https://orgspirituality.org", label: "orgspirituality.org", icon: "globe-hemisphere-west" },
      { href: ORG_SITE, label: "ORG portal", icon: "house-simple" },
      { href: ORG_LOG, label: "ORG AstroLog", icon: "door-open" },
      { href: DIRECTIONS, label: "Three directions", icon: "compass-tool" },
      { href: "https://github.com/Octagon-Religious-Research-Group-ORG", label: "GitHub", icon: "github-logo" },
    ],
  },
];

const linkClass = "inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-accent";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_2fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <OctagonMark size={34} />
            <span className="display text-xl">Octagon Religious-Research Group</span>
          </div>
          <p className="mt-4 text-sm text-muted">
            This is a preview built to show what ORG&apos;s site could become. The official site is
            orgspirituality.org, and members vote on every change to it.
          </p>
          <p className="mt-3 text-sm text-muted">
            Part of the drasticstatic ORG lab: every change to this preview is in the lab&apos;s changelog.
            ORG&apos;s own record is the ORG AstroLog.
          </p>
          <p className="mt-3 text-sm text-muted">
            Artwork and words come from orgspirituality.org. The lights began as Renan T&apos;s design proposal,
            now kept as history in ORG&apos;s AstroLog. Built by drasticstatic with Alfred.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <a href="https://github.com/drasticstatic" className={linkClass}>
              <i className="ph ph-github-logo text-accent" aria-hidden="true" />
              drasticstatic
            </a>
            <a href="https://github.com/drasticstatic/anthropas-argus-alfred-public-preview" className={linkClass}>
              <i className="ph ph-robot text-accent" aria-hidden="true" />
              Alfred
            </a>
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <nav aria-label="This preview">
            <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-muted">
              <i className="ph ph-cube text-accent" aria-hidden="true" />
              This preview
            </p>
            <ul className="grid gap-2">
              {NAV.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className={linkClass}>
                    <i className={`ph ph-${s.icon} text-accent`} aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {GROUPS.map((g) => (
            <nav key={g.label} aria-label={g.label}>
              <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                <i className={`ph ph-${g.icon} text-accent`} aria-hidden="true" />
                {g.label}
              </p>
              <ul className="grid gap-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link href={l.href} className={linkClass}>
                        <i className={`ph ph-${l.icon} text-accent`} aria-hidden="true" />
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} data-arrival-open={l.open} className={linkClass}>
                        <i className={`ph ph-${l.icon} text-accent`} aria-hidden="true" />
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
