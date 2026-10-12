"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SHEET_ORDER, sectionById } from "@/lib/sections";
import { OctagonMark } from "@/components/OctagonMark";
import { ArrivalControls } from "@/components/ArrivalControls";
import { LAB, LAB_CHANGELOG, ORG_LOG } from "@/lib/arrival";

const NAV = SHEET_ORDER.filter((id): id is string => id !== null).map(sectionById);

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      {/* Part of the drasticstatic ORG lab: say so, and link the lab's changelog where it's seen. */}
      <div className="lab-strip border-b border-border/60 text-[0.8rem] text-muted">
        <div className="mx-auto flex max-w-7xl items-center gap-x-4 gap-y-1 overflow-x-auto whitespace-nowrap px-4 py-1.5 sm:px-6">
          <span>
            A preview from the <a href={LAB} className="text-accent">drasticstatic ORG lab</a>
          </span>
          <a href={LAB_CHANGELOG} className="inline-flex items-center gap-1 font-semibold text-accent">
            <i className="ph ph-clock-counter-clockwise" aria-hidden="true" />
            Lab changelog
          </a>
          <a href={ORG_LOG} className="hidden text-muted hover:text-accent sm:inline">ORG AstroLog</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 no-underline" aria-label="ORG home">
          <OctagonMark size={30} />
          <span className="display text-xl text-heading">ORG</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 2xl:flex">
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
          <ArrivalControls />
          <div className="hidden md:block">
            <ConnectButton showBalance={false} chainStatus="none" accountStatus="avatar" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="oct btn btn-quiet !px-3 !py-2 text-sm 2xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-border px-4 pb-5 2xl:hidden">
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
          <p className="pt-3 text-sm">
            <a href={LAB_CHANGELOG} className="text-accent">The lab&apos;s changelog</a>
          </p>
          <div className="pt-3 md:hidden">
            <ConnectButton showBalance={false} chainStatus="none" />
          </div>
        </nav>
      )}
    </header>
  );
}
