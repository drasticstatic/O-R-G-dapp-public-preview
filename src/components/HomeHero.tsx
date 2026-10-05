"use client";

import Link from "next/link";
import { useState } from "react";
import { MarbleField } from "@/components/MarbleField";
import { OctagonWheel } from "@/components/OctagonWheel";
import { BlotterSheet } from "@/components/BlotterSheet";
import { setExperience, useExperience } from "@/lib/experience";
import type { Section } from "@/lib/sections";

export function HomeHero() {
  const exp = useExperience();
  const [active, setActive] = useState<Section | null>(null);

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <MarbleField />
        <div className="hero-veil absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:min-h-[calc(100svh-64px)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:pt-6">
        <div className="max-w-xl">
          <h1 className="ink-text text-[clamp(2.7rem,6vw,5rem)] leading-[1.02]">
            Where science and spirituality meet.
          </h1>
          <p className="mt-6 text-lg text-foreground/85 sm:text-xl">
            ORG aims to improve the Universe through advances in the human understanding of
            spirituality and science.
          </p>
          <p className="mt-3 text-muted">
            Members propose beliefs, vote on them, and plan octagon-shaped temples and research centers
            together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/join" className="oct btn btn-primary">
              Join ORG
            </Link>
            <Link href="/beliefs" className="oct btn btn-quiet">
              Read the beliefs
            </Link>
          </div>
          <p className="stir-hint mt-8 text-sm text-muted">Move your cursor through the ink to stir it.</p>
        </div>

        <div className="mx-auto w-full max-w-[720px]">
          {exp.view === "sheet" ? (
            <div className="mx-auto max-w-[560px]">
              <BlotterSheet onActive={setActive} />
            </div>
          ) : (
            <OctagonWheel onActive={setActive} />
          )}

          <div className="mt-4 flex flex-col items-center gap-4 text-center">
            <p aria-hidden className="oct min-h-[3.2em] max-w-md bg-background/75 px-5 py-2 text-sm text-muted backdrop-blur-sm">
              {active ? (
                <>
                  <span className="font-semibold text-foreground">{active.label}.</span> {active.subtitle}
                </>
              ) : (
                "Eight doors around one center. Choose a door, or step into the center to join."
              )}
            </p>
            <div role="group" aria-label="Navigation view" className="flex gap-2">
              {(["wheel", "sheet"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={exp.view === v}
                  onClick={() => setExperience({ view: v })}
                  className="oct btn btn-quiet !px-4 !py-1.5 text-sm aria-pressed:!text-accent"
                >
                  {v === "wheel" ? "Octagon" : "Blotter sheet"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
