import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-2xl text-lg text-foreground/70">{lede}</p>
        )}
      </div>
    </div>
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
    <section className={`mx-auto max-w-4xl px-4 py-10 sm:px-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold text-heading">
          {title}
        </h2>
      )}
      <div className="prose-content mt-4 space-y-4 text-foreground/80">
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
