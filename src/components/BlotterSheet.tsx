"use client";

import { SHEET_ORDER, sectionById, withBase, type Section } from "@/lib/sections";
import { useSpaLink } from "@/components/OctagonWheel";

export function BlotterSheet({ onActive }: { onActive?: (section: Section | null) => void }) {
  const go = useSpaLink();

  return (
    <nav aria-label="ORG sections" className="sheet">
      {SHEET_ORDER.map((id) => {
        if (id === null) {
          return (
            <a key="core" href={withBase("/join")} onClick={go("/join")} className="tab" aria-label="Join ORG">
              <span className="tab-art block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="core-img" src={withBase("/art/core.webp")} alt="" />
              </span>
              <span className="tab-label">Join ORG</span>
            </a>
          );
        }
        const s = sectionById(id);
        return (
          <a
            key={s.id}
            href={withBase(s.href)}
            onClick={go(s.href)}
            className="tab"
            onMouseEnter={() => onActive?.(s)}
            onMouseLeave={() => onActive?.(null)}
            onFocus={() => onActive?.(s)}
            onBlur={() => onActive?.(null)}
          >
            <span className="tab-art block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase(s.art)} alt="" loading="lazy" />
            </span>
            <span className="tab-label">{s.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
