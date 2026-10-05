import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ThreeLights } from "@/components/ThreeLights";
import { BeliefItem } from "@/components/Belief";
import { BELIEFS } from "@/lib/beliefs";
import { withBase } from "@/lib/sections";

const FEATURED = ["I", "VIII", "VI"];

export default function Home() {
  const featured = BELIEFS.filter((b) => FEATURED.includes(b.roman));

  return (
    <>
      <HomeHero />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="max-w-md">
          <h2 className="text-[2.4rem] leading-tight">Beliefs are kept by vote</h2>
          <p className="mt-4 text-muted">
            Any member can propose a belief. It becomes an ORG belief when most voting members agree, and
            it can be revisited whenever someone asks.
          </p>
          <p className="mt-6">
            <Link href="/beliefs" className="text-accent">
              Read all nine majority-held beliefs
            </Link>
          </p>
        </div>
        <div className="space-y-10">
          {featured.map((b) => (
            <BeliefItem key={b.roman} belief={b} compact />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-[2.4rem] leading-tight">Renan&apos;s three directions, living together</h2>
            <p className="mt-4 text-muted">
              Renan proposed three looks for orgspirituality.org and asked members to choose one. This
              preview keeps all three. Pick the one that suits you, or let the time of day choose. Members
              still decide what the main site becomes.
            </p>
            <p className="mt-4">
              <a href="https://org-new-look.netlify.app/" className="text-accent">
                See Renan&apos;s proposal
              </a>
            </p>
          </div>
          <div className="mt-10">
            <ThreeLights />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[auto_1fr]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={withBase("/art/gifts.webp")} alt="" className="emblem mx-auto h-44 w-44 object-cover sm:h-56 sm:w-56" />
        <div className="max-w-xl">
          <h2 className="text-[2.4rem] leading-tight">Support the work</h2>
          <p className="mt-4 text-muted">
            ORG shares useful objects with members whether or not they can meet a suggested donation, and
            gifts fund the research and the temples to come. This preview adds a crypto option alongside
            ORG&apos;s PayPal and Venmo.
          </p>
          <div className="mt-6">
            <Link href="/give" className="oct btn btn-primary">
              Give to ORG
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
