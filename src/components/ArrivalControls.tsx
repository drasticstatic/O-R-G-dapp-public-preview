"use client";

import { useEffect, useRef } from "react";

// The arrival kit's <arrival-controls> (search, the what's-new count, light swatches, pause,
// cursor effects, reading mode, and the light & motion drawer). The kit renders into the element
// itself, so it's created after hydration rather than by React: React never sees children it
// didn't render, and re-renders of the header leave it alone.
export function ArrivalControls() {
  const host = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = document.createElement("arrival-controls");
    host.current?.appendChild(el);
    return () => el.remove();
  }, []);
  return <span ref={host} className="arr-host" />;
}
