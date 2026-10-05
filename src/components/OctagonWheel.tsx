"use client";

import { useId, type CSSProperties, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { SECTIONS, withBase, type Section } from "@/lib/sections";

const C = 500;
const R = 340;
const R0 = 104;
const EDGE = Math.cos(Math.PI / 8);

function vertex(r: number, k: number): [number, number] {
  const a = ((-112.5 + 45 * k) * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
}

function octagon(r: number): string {
  return Array.from({ length: 8 }, (_, k) => vertex(r, k).map((n) => n.toFixed(1)).join(",")).join(" ");
}

function wedge(k: number): string {
  return [vertex(R0, k), vertex(R, k), vertex(R, k + 1), vertex(R0, k + 1)]
    .map((p) => p.map((n) => n.toFixed(1)).join(","))
    .join(" ");
}

export function useSpaLink() {
  const router = useRouter();
  return (href: string) => (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    router.push(href);
  };
}

export function OctagonWheel({
  onActive,
}: {
  onActive?: (section: Section | null) => void;
}) {
  const uid = useId().replace(/:/g, "");
  const go = useSpaLink();
  const set = (s: Section | null) => onActive?.(s);

  return (
    <svg
      viewBox="-100 90 1200 820"
      className="wheel arrive h-auto w-full"
      role="navigation"
      aria-label="ORG sections"
    >
      <defs>
        {SECTIONS.map((_, k) => (
          <clipPath key={k} id={`${uid}-w${k}`}>
            <polygon points={wedge(k)} />
          </clipPath>
        ))}
        <clipPath id={`${uid}-core`}>
          <polygon points={octagon(R0 - 2)} />
        </clipPath>
      </defs>

      {SECTIONS.map((s, k) => {
        const phi = ((-90 + 45 * k) * Math.PI) / 180;
        const cos = Math.cos(phi);
        const sin = Math.sin(phi);
        const mid = (R0 + R) / 2 + 18;
        const cx = C + mid * cos;
        const cy = C + mid * sin;
        const size = 300;
        const lr = R * EDGE + 34;
        const lx = C + lr * cos;
        const ly = C + lr * sin;
        const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
        const baseline = sin < -0.3 ? "auto" : sin > 0.3 ? "hanging" : "middle";
        return (
          <a
            key={s.id}
            href={withBase(s.href)}
            className="wedge"
            aria-label={`${s.label}: ${s.subtitle}`}
            onClick={go(s.href)}
            onMouseEnter={() => set(s)}
            onMouseLeave={() => set(null)}
            onFocus={() => set(s)}
            onBlur={() => set(null)}
          >
            <g
              className="wedge-body"
              style={{ "--dx": `${(cos * 16).toFixed(1)}px`, "--dy": `${(sin * 16).toFixed(1)}px` } as CSSProperties}
            >
              <g className="wedge-art" style={{ "--i": k } as CSSProperties}>
                <image
                  href={withBase(s.art)}
                  x={cx - size / 2}
                  y={cy - size / 2}
                  width={size}
                  height={size}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#${uid}-w${k})`}
                />
                <polygon className="wedge-edge" points={wedge(k)} fill="none" />
              </g>
              <text
                className="wedge-label"
                x={lx}
                y={ly}
                textAnchor={anchor}
                dominantBaseline={baseline}
              >
                {s.label}
              </text>
            </g>
          </a>
        );
      })}

      <g className="frame" fill="none" strokeWidth={5} strokeLinejoin="round" pointerEvents="none">
        <polygon points={octagon(R)} />
        <polygon points={octagon(R0)} />
        {Array.from({ length: 8 }, (_, k) => {
          const [x1, y1] = vertex(R0, k);
          const [x2, y2] = vertex(R, k);
          return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      <a
        href={withBase("/join")}
        className="core wedge"
        aria-label="Join ORG"
        onClick={go("/join")}
        onMouseEnter={() => set(null)}
      >
        <g clipPath={`url(#${uid}-core)`}>
          <image
            className="core-art"
            href={withBase("/art/core.webp")}
            x={C - R0 * 1.25}
            y={C - R0 * 1.25}
            width={R0 * 2.5}
            height={R0 * 2.5}
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
        <polygon className="core-ring" points={octagon(R0)} fill="none" stroke="transparent" strokeWidth={6} />
      </a>
    </svg>
  );
}
