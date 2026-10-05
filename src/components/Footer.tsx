import Link from "next/link";
import { SHEET_ORDER, sectionById } from "@/lib/sections";
import { OctagonMark } from "@/components/OctagonMark";

const NAV = SHEET_ORDER.filter((id): id is string => id !== null).map(sectionById);

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <OctagonMark size={34} />
            <span className="display text-xl">Octagon Religious-Research Group</span>
          </div>
          <p className="mt-4 text-sm text-muted">
            This is a preview built to show what ORG&apos;s site could become. The official site is{" "}
            <a href="https://orgspirituality.org" className="text-accent">orgspirituality.org</a>, and
            members vote on every change to it.
          </p>
          <p className="mt-3 text-sm text-muted">
            Artwork and words come from orgspirituality.org. The three lights come from{" "}
            <a href="https://org-new-look.netlify.app/" className="text-accent">Renan Teixeira&apos;s design proposal</a>.
            Built by{" "}
            <a href="https://github.com/drasticstatic" className="text-accent">drasticstatic</a> with{" "}
            <a href="https://github.com/drasticstatic/anthropas-argus-alfred-public-preview" className="text-accent">Alfred</a>.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 content-start gap-x-8 gap-y-2 sm:grid-cols-3">
          {NAV.map((s) => (
            <Link key={s.id} href={s.href} className="text-sm text-muted no-underline hover:text-accent">
              {s.label}
            </Link>
          ))}
          <Link href="/join" className="text-sm text-muted no-underline hover:text-accent">Join</Link>
          <a href="https://github.com/Octagon-Religious-Research-Group-ORG" className="text-sm text-muted no-underline hover:text-accent">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
