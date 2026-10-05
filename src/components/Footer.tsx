import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-sm font-semibold text-heading">
            O·R·G — Octagon Research Group and Spirituality Centers
          </p>
          <p className="mt-2 text-sm text-foreground/60">
            Where science and spirituality meet. Founded by Tripp Aardema.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[...NAV_LINKS, { href: "/join", label: "Join" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/60 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-foreground/45 sm:px-6">
        Early public preview — content and web3 features are an evolving
        scaffold, not a final release.
      </div>
    </footer>
  );
}
