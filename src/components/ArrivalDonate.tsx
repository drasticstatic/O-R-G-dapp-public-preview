"use client";

import { useEffect, useRef } from "react";

// The arrival kit's <arrival-donate>: ORG's own ways to give (from ORG's org.js), the thanks-by-name
// list, and the crypto slot with Connect, the "New to wallets?" guide and the practice gift (kit 1.5.2:
// a walk through giving where no wallet, money or address is involved). ORG has published no address,
// so the kit keeps that slot in preview and nothing can be sent. Created after hydration, like
// <arrival-controls>, so React never sees children it didn't render.
export function ArrivalDonate() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = document.createElement("arrival-donate");
    host.current?.appendChild(el);
    return () => el.remove();
  }, []);
  return <div ref={host} className="arr-host" />;
}
