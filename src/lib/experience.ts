import { useSyncExternalStore } from "react";
import { STORAGE_KEY } from "./experience-key";

export type Light = "night" | "prism" | "stone" | "day";
export type Theme = Exclude<Light, "day">;
export type Motion = "still" | "gentle" | "vivid";
export type View = "wheel" | "sheet";

export type Experience = {
  light: Light;
  motion: Motion;
  view: View;
  chosen: boolean;
};

export const LIGHTS: { id: Light; name: string; note: string }[] = [
  { id: "night", name: "Night Sanctuary", note: "Candle-lit indigo, warm gold, and aurora light." },
  { id: "prism", name: "Prism Light", note: "Morning light through a prism, soft and bright." },
  { id: "stone", name: "Stone & Lapis", note: "Temple stone veined with lapis and gold." },
  { id: "day", name: "Follow the day", note: "Prism by morning, stone by afternoon, sanctuary by night." },
];

export const MOTIONS: { id: Motion; name: string; note: string }[] = [
  { id: "still", name: "Still", note: "Nothing moves unless you touch it." },
  { id: "gentle", name: "Gentle", note: "The ink drifts slowly. Your cursor stirs it." },
  { id: "vivid", name: "Vivid", note: "Faster ink and a trail of prism light behind your cursor." },
];

export function themeForHour(hour: number): Theme {
  if (hour >= 5 && hour < 11) return "prism";
  if (hour >= 11 && hour < 17) return "stone";
  return "night";
}

export function resolveTheme(light: Light, now = new Date()): Theme {
  return light === "day" ? themeForHour(now.getHours()) : light;
}

function defaults(): Experience {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  return { light: "night", motion: reduced ? "still" : "gentle", view: "wheel", chosen: false };
}

function read(): Experience {
  const base = defaults();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...base, ...(JSON.parse(raw) as Partial<Experience>) };
    const legacy = localStorage.getItem("org-theme");
    if (legacy === "light") return { ...base, light: "prism" };
  } catch {
    // Storage blocked (private windows): fall back to defaults for this visit.
  }
  return base;
}

let current: Experience | null = null;
const listeners = new Set<() => void>();

function apply(exp: Experience) {
  const root = document.documentElement;
  root.dataset.light = exp.light;
  root.dataset.theme = resolveTheme(exp.light);
  root.dataset.motion = exp.motion;
}

export function getExperience(): Experience {
  if (!current) current = read();
  return current;
}

export function setExperience(patch: Partial<Experience>) {
  current = { ...getExperience(), ...patch };
  apply(current);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Not persisted, but still applied for this page.
  }
  listeners.forEach((notify) => notify());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

const SERVER: Experience = { light: "night", motion: "gentle", view: "wheel", chosen: true };

export function useExperience(): Experience {
  return useSyncExternalStore(subscribe, getExperience, () => SERVER);
}

export function useTheme(): Theme {
  const exp = useExperience();
  return resolveTheme(exp.light);
}
