"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function setStoredTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("org-theme", next);
  } catch {
    // Storage can be unavailable (private windows); the choice still applies for this page.
  }
  listeners.forEach((notify) => notify());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark" as Theme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setStoredTheme(next)}
      aria-label={`Switch to ${next} theme`}
      className="rounded-md border border-border px-3 py-2 text-sm text-foreground/80 hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? "☀ Light" : "☾ Dark"}
    </button>
  );
}
