"use client";

import { LIGHTS, setExperience, useExperience, type Light } from "@/lib/experience";

const SAMPLE = "Where science and spirituality meet.";

function Panel({ id, name, note, active }: { id: Light; name: string; note: string; active: boolean }) {
  const isDay = id === "day";
  return (
    <div
      data-theme={isDay ? undefined : id}
      className={`oct-card oct ${active ? "!bg-accent" : ""}`}
    >
      <div className={`oct-inner oct themed flex h-full flex-col !p-5`}>
        {isDay ? (
          <div aria-hidden className="oct flex h-24 overflow-hidden">
            <span data-theme="prism" className="flex-1" style={{ background: "var(--ink)" }} />
            <span data-theme="stone" className="flex-1" style={{ background: "var(--ink)" }} />
            <span data-theme="night" className="flex-1" style={{ background: "var(--ink)" }} />
          </div>
        ) : (
          <div aria-hidden className="oct h-24" style={{ background: "var(--ink)" }} />
        )}
        <h3 className="mt-5 text-2xl">{name}</h3>
        <p className="mt-1 text-sm text-muted">{note}</p>
        {!isDay && <p className="display mt-4 text-lg leading-snug">{SAMPLE}</p>}
        <div className="mt-auto pt-5">
          <button
            type="button"
            aria-pressed={active}
            onClick={() => setExperience({ light: id, chosen: true })}
            className={`oct btn ${active ? "btn-primary" : "btn-quiet"} !px-4 !py-2 text-sm`}
          >
            {active ? "In use" : "Use this light"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ThreeLights() {
  const exp = useExperience();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LIGHTS.map((l) => (
        <Panel key={l.id} id={l.id} name={l.name} note={l.note} active={exp.light === l.id} />
      ))}
    </div>
  );
}
