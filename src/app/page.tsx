import Link from "next/link";
import { Card } from "@/components/Page";

const PILLARS = [
  {
    title: "Beliefs, decided together",
    body: "Members vote on individual and collective beliefs. Anything held by a majority becomes a shared ORG belief on the home page.",
    href: "/beliefs",
  },
  {
    title: "Research, not just ritual",
    body: "Spiritual inquiry paired with real research directions — from entheogen safety to substance-use treatment.",
    href: "/research",
  },
  {
    title: "Octagon centers",
    body: "The long-term vision: octagon-shaped research and spiritual centers, built one at a time as the community grows.",
    href: "/infrastructure",
  },
];

export default function Home() {
  return (
    <div>
      <div className="border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Octagon Research Group and Spirituality Centers
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-canopy-deep dark:text-canopy sm:text-5xl">
            Where science and spirituality meet.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/70">
            ORG is a member-governed community exploring the intersection of
            spirituality and scientific research — and building toward
            physical Octagon centers that put both into practice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/join"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-strong"
            >
              Join or sign in as a member
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-accent hover:text-accent"
            >
              Read our mission
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Card key={p.href}>
              <h3 className="font-semibold text-canopy-deep dark:text-canopy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{p.body}</p>
              <Link
                href={p.href}
                className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-strong"
              >
                Learn more →
              </Link>
            </Card>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-semibold text-canopy-deep dark:text-canopy">
            Gifts and contributions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/70">
            Whether or not you can meet a suggested donation, ORG shares
            useful objects with members — and now accepts crypto
            contributions alongside traditional gifts.
          </p>
          <Link
            href="/give"
            className="mt-6 inline-block rounded-md bg-canopy px-5 py-2.5 text-sm font-medium text-white hover:bg-canopy-deep dark:text-canopy-deep"
          >
            Give or request offerings →
          </Link>
        </div>
      </div>
    </div>
  );
}
