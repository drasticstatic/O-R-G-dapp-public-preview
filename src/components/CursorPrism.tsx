"use client";

import { useEffect, useRef } from "react";
import { useExperience, resolveTheme } from "@/lib/experience";

type Pt = { x: number; y: number; t: number };

const LIFE = 520;

export function CursorPrism() {
  const ref = useRef<HTMLCanvasElement>(null);
  const exp = useExperience();
  const theme = resolveTheme(exp.light);
  const active = exp.motion === "vivid";

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !active) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pts: Pt[] = [];
    let raf = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const night = theme === "night";

    const size = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const frame = () => {
      raf = 0;
      const now = performance.now();
      while (pts.length && now - pts[0].t > LIFE) pts.shift();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = night ? "lighter" : "source-over";
      ctx.lineCap = "round";
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        const life = 1 - (now - b.t) / LIFE;
        const hue = (b.t / 6 + i * 9) % 360;
        ctx.strokeStyle = `hsla(${hue}, ${night ? 90 : 75}%, ${night ? 68 : 58}%, ${life * (night ? 0.8 : 0.55)})`;
        ctx.lineWidth = 0.6 + life * 3.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      if (pts.length) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (pts.length > 48) pts.shift();
      if (!raf) raf = requestAnimationFrame(frame);
    };

    size();
    window.addEventListener("resize", size);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      window.removeEventListener("pointermove", onMove);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [active, theme]);

  if (!active) return null;
  return <canvas ref={ref} aria-hidden className="cursor-prism" />;
}
