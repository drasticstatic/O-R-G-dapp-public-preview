"use client";

import Link from "next/link";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NAV_LINKS } from "@/lib/nav";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="text-lg font-semibold tracking-wide text-heading">
            O·R·G
          </span>
          <span className="hidden text-xs text-foreground/60 sm:inline">
            Octagon Research Group and Spirituality Centers
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/75 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ConnectButton showBalance={false} chainStatus="icon" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="rounded-md border border-border px-3 py-2 text-sm lg:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-2 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-sm text-foreground/80 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-3 sm:hidden">
            <ConnectButton showBalance={false} chainStatus="icon" />
          </div>
        </nav>
      )}
    </header>
  );
}
