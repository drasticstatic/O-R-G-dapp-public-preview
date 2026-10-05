import type { ReactNode } from "react";
import { SECTIONS, withBase } from "@/lib/sections";

export function PageHeader({
  id,
  title,
  lede,
}: {
  id: string;
  title: string;
  lede?: string;
}) {
  const section = SECTIONS.find((s) => s.id === id);
  const art = section?.art ?? "/art/core.webp";

  return (
    <header className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(80% 120% at 85% 0%, var(--hero-from), var(--background) 70%)" }}
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[auto_1fr]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={withBase(art)} alt="" className="emblem h-28 w-28 object-cover sm:h-36 sm:w-36" />
        <div>
          <h1 className="text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
          {lede && <p className="mt-4 max-w-2xl text-lg text-muted">{lede}</p>}
          {section && (
            <p className="mt-4 text-sm">
              <a href={section.live} className="text-accent">
                Read the full {section.label.toLowerCase()} page on orgspirituality.org
              </a>
            </p>
          )}
        </div>
      </div>
      <div aria-hidden className="h-[3px] w-full" style={{ background: "var(--ink)" }} />
    </header>
  );
}

export function Section({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-3xl px-4 py-10 sm:px-6 ${className}`}>
      {title && <h2 className="text-[1.9rem] leading-tight">{title}</h2>}
      <div className="mt-4 space-y-4 text-foreground/90">{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`oct-card oct ${className}`}>
      <div className="oct-inner oct">{children}</div>
    </div>
  );
}
