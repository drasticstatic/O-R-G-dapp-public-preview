"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SHEET_ORDER, sectionById } from "@/lib/sections";
import { OctagonMark } from "@/components/OctagonMark";
import { JourneyButton } from "@/components/Journey";

const NAV = SHEET_ORDER.filter((id): id is string => id !== null).map(sectionById);

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 no-underline" aria-label="ORG home">
          <OctagonMark size={30} />
          <span className="display text-xl text-heading">ORG</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
          {NAV.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              aria-current={isActive(s.href) ? "page" : undefined}
              className="text-[0.92rem] text-foreground/80 no-underline transition-colors hover:text-accent aria-[current=page]:text-accent aria-[current=page]:underline"
            >
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <JourneyButton />
          <div className="hidden md:block">
            <ConnectButton showBalance={false} chainStatus="none" accountStatus="avatar" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="oct btn btn-quiet !px-3 !py-2 text-sm xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-border px-4 pb-5 xl:hidden">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 pt-3 sm:grid-cols-4">
            {NAV.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(s.href) ? "page" : undefined}
                  className="block py-2 no-underline hover:text-accent aria-[current=page]:text-accent"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-3 md:hidden">
            <ConnectButton showBalance={false} chainStatus="none" />
          </div>
        </nav>
      )}
    </header>
  );
}
