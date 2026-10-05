"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  LIGHTS,
  MOTIONS,
  getExperience,
  setExperience,
  useExperience,
  type Light,
} from "@/lib/experience";
import { MarbleField } from "@/components/MarbleField";
import { OctagonMark } from "@/components/OctagonMark";
import { CursorPrism } from "@/components/CursorPrism";

let open: boolean | null = null;
const listeners = new Set<() => void>();

function isOpen() {
  if (open === null) open = !getExperience().chosen;
  return open;
}

function setOpen(next: boolean) {
  open = next;
  listeners.forEach((l) => l());
}

export function openJourney() {
  setOpen(true);
}

function useOpen() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    isOpen,
    () => false,
  );
}

function Swatch({ light, size = 44 }: { light: Light; size?: number }) {
  if (light === "day") {
    return (
      <span
        aria-hidden
        className="emblem shrink-0"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(90deg, #c9b8ff 0 33.3%, #22408a 0 66.6%, #100e1c 0)",
        }}
      />
    );
  }
  return (
    <span
      aria-hidden
      data-theme={light}
      className="emblem shrink-0"
      style={{ width: size, height: size, background: "var(--ink)" }}
    />
  );
}

export function JourneyButton() {
  const exp = useExperience();
  return (
    <button
      type="button"
      onClick={openJourney}
      className="oct btn btn-quiet !px-3 !py-2 text-sm"
      aria-haspopup="dialog"
    >
      <Swatch light={exp.light} size={18} />
      <span className="hidden sm:inline">Light and motion</span>
      <span className="sm:hidden">Light</span>
    </button>
  );
}

export function JourneyLayer() {
  const exp = useExperience();
  const visible = useOpen();
  const panel = useRef<HTMLDivElement>(null);
  const firstVisit = !exp.chosen;

  const close = () => {
    setExperience({ chosen: true });
    setOpen(false);
  };

  useEffect(() => {
    if (exp.light !== "day") return;
    const id = window.setInterval(() => setExperience({}), 10 * 60 * 1000);
    return () => window.clearInterval(id);
  }, [exp.light]);

  useEffect(() => {
    if (!visible) return;
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLInputElement>("input:checked")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setExperience({ chosen: true });
        setOpen(false);
      }
      if (e.key === "Tab" && panel.current) {
        const focusable = panel.current.querySelectorAll<HTMLElement>("input:checked, button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, [visible]);

  const motionNote = MOTIONS.find((m) => m.id === exp.motion)?.note;

  return (
    <>
      <CursorPrism />
      {visible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="journey-title"
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto p-4 sm:p-8"
        >
          <MarbleField />
          <div aria-hidden className="absolute inset-0 bg-background/35" onClick={close} />
          <div ref={panel} className="oct-card oct relative w-full max-w-2xl shadow-2xl">
            <div className="oct-inner oct !p-6 sm:!p-9">
              <div className="flex items-center gap-3">
                <OctagonMark size={34} />
                <span className="font-semibold text-muted">ORG</span>
              </div>
              <h2 id="journey-title" className="mt-5 text-3xl sm:text-4xl">
                {firstVisit ? "Choose how you arrive" : "Light and motion"}
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Pick a light and how much movement you&apos;d like. You can change both any time from the
                button in the header.
              </p>

              <fieldset className="mt-7">
                <legend className="mb-3 text-sm font-semibold text-muted">Light</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {LIGHTS.map((l) => (
                    <label
                      key={l.id}
                      className="oct-card oct cursor-pointer has-[:checked]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
                    >
                      <input
                        type="radio"
                        name="light"
                        value={l.id}
                        checked={exp.light === l.id}
                        onChange={() => setExperience({ light: l.id })}
                        className="sr-only"
                      />
                      <span className="oct-inner oct flex items-center gap-3 !p-3.5">
                        <Swatch light={l.id} />
                        <span className="flex flex-col">
                          <span className="font-semibold leading-snug">{l.name}</span>
                          <span className="text-sm leading-snug text-muted">{l.note}</span>
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="mb-3 text-sm font-semibold text-muted">Motion</legend>
                <div className="grid grid-cols-3 gap-2">
                  {MOTIONS.map((m) => (
                    <label
                      key={m.id}
                      className="oct-card oct cursor-pointer text-center has-[:checked]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
                    >
                      <input
                        type="radio"
                        name="motion"
                        value={m.id}
                        checked={exp.motion === m.id}
                        onChange={() => setExperience({ motion: m.id })}
                        className="sr-only"
                      />
                      <span className="oct-inner oct block !px-2 !py-2.5 font-semibold">{m.name}</span>
                    </label>
                  ))}
                </div>
                <p className="mt-3 min-h-[1.6em] text-sm text-muted" aria-live="polite">
                  {motionNote}
                </p>
              </fieldset>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="button" onClick={close} className="oct btn btn-primary">
                  {firstVisit ? "Enter ORG" : "Done"}
                </button>
                {firstVisit && (
                  <span className="text-sm text-muted">Your choice is saved in this browser only.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
