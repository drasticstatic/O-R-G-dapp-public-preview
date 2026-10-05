export type Section = {
  id: string;
  label: string;
  href: string;
  art: string;
  subtitle: string;
  live: string;
};

// Wheel order runs clockwise from the top edge. It is the live homepage's 3×3 sheet
// folded around its center tile: Community sits top, Beliefs top-right, and so on.
export const SECTIONS: Section[] = [
  {
    id: "community",
    label: "Community",
    href: "/community",
    art: "/art/community.webp",
    subtitle: "Meetings, events, ceremonies, membership, and spiritual organizations.",
    live: "https://orgspirituality.org/community",
  },
  {
    id: "beliefs",
    label: "Beliefs",
    href: "/beliefs",
    art: "/art/beliefs.webp",
    subtitle: "Majority-held ORG beliefs, spiritual principles, and member-submitted beliefs.",
    live: "https://orgspirituality.org/beliefs",
  },
  {
    id: "research",
    label: "Research",
    href: "/research",
    art: "/art/research.webp",
    subtitle: "Research ideas, study directions, methods, and spiritual science questions.",
    live: "https://orgspirituality.org/research",
  },
  {
    id: "gifts",
    label: "Gifts",
    href: "/give",
    art: "/art/gifts.webp",
    subtitle: "Gifts from ORG, suggested donation values, and how contributions are used.",
    live: "https://orgspirituality.org/offerings",
  },
  {
    id: "future",
    label: "Future",
    href: "/future-ideas",
    art: "/art/future.webp",
    subtitle: "Future website, app, invention, and experience concepts for ORG.",
    live: "https://orgspirituality.org/future-ideas",
  },
  {
    id: "legal",
    label: "Legal",
    href: "/legal",
    art: "/art/legal.webp",
    subtitle: "Legal references, attorneys, risks, recommendations, and archive notes.",
    live: "https://orgspirituality.org/legal",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    href: "/infrastructure",
    art: "/art/infrastructure.webp",
    subtitle: "Octagon temple concepts, locations, sketches, and building process notes.",
    live: "https://orgspirituality.org/infrastructure",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    art: "/art/about.webp",
    subtitle: "Who ORG is, what it aims for, and how it governs itself by vote.",
    live: "https://orgspirituality.org/about",
  },
];

// The live homepage's 3×3 sheet, row by row; null is the center tile.
export const SHEET_ORDER: (string | null)[] = [
  "about", "community", "beliefs",
  "infrastructure", null, "research",
  "legal", "future", "gifts",
];

export function sectionById(id: string): Section {
  const s = SECTIONS.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown section: ${id}`);
  return s;
}

export function withBase(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
