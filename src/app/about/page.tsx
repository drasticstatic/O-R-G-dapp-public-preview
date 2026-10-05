import { PageHeader } from "@/components/Page";

type Article = { roman: string; title: string; lead: string; points?: string[] };

// From orgspirituality.org/about (snapshot 2026-10-05), lightly trimmed.
const ARTICLES: Article[] = [
  {
    roman: "I",
    title: "Identity and name",
    lead: "“ORG” stands for the Octagon Religious-Research Group and Spirituality Centers, a 508(c)(1)(A) religious organization and a 501(c)(3) nonprofit.",
    points: [
      "ORG fits the requirements of a church but prefers to be known simply as a spiritual organization.",
      "The name came from years of entheogenic visions, and members can vote to change it.",
    ],
  },
  {
    roman: "II",
    title: "Our mission",
    lead: "ORG aims to improve the Universe through advances in the human understanding of spirituality and science.",
    points: [
      "Octagon-shaped temples will give spiritualists a safe place to connect and experience theophany.",
      "Some locations will be for scientists researching anything that improves the Universe.",
      "Improving the Universe includes strengthening public understanding of, and respect for, individual spirituality.",
    ],
  },
  {
    roman: "III",
    title: "Governance by vote",
    lead: "ORG runs on a majority-rules voting system and works to remove hierarchy.",
    points: [
      "Beliefs can change quickly as science discovers more, or as public understanding changes.",
      "Most votes, like those on beliefs, never close and can change at any time.",
      "The hardest open question is how long a vote should run when something is urgent.",
    ],
  },
  {
    roman: "IV",
    title: "Names of the Creator",
    lead: "ORG respects every name that shows respect toward The Universal Creator.",
    points: ["The Universal Creator is the name currently preferred in official documents, open to a vote."],
  },
  {
    roman: "V",
    title: "Entheogens",
    lead: "The Universal Creator intends entheogens, psychedelic and non-psychedelic, to be freely used by all interested humans.",
    points: ["A major goal of ORG is wider legal access to, and more approved uses of, psychedelics for all who seek them."],
  },
  {
    roman: "VI",
    title: "An open document",
    lead: "Everyone who reads ORG's documents is invited to suggest improvements to any page or belief, member or not.",
  },
  {
    roman: "VII",
    title: "What members can do",
    lead: "Members who join can:",
    points: [
      "Keep a personal page stating their spiritual beliefs and research interests.",
      "Vote.",
      "Meet regularly, in person or by video, to discuss beliefs and gather in ceremony.",
      "Lead ceremonies.",
      "Use ORG's resources directly.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        id="about"
        title="About ORG"
        lede="A living document, revised as our knowledge and beliefs evolve."
      />
      <div className="mx-auto max-w-3xl space-y-14 px-4 py-14 sm:px-6">
        {ARTICLES.map((a) => (
          <article key={a.roman} className="grid grid-cols-[3.25rem_1fr] gap-x-3 sm:grid-cols-[4.5rem_1fr]">
            <span aria-hidden className="display text-[1.9rem] leading-none text-accent sm:text-[2.4rem]">
              {a.roman}
            </span>
            <div>
              <h2 className="text-[1.7rem] leading-tight">{a.title}</h2>
              <p className="mt-3 text-lg">{a.lead}</p>
              {a.points && (
                <ul className="mt-4 space-y-2 border-l border-border pl-4 text-foreground/85">
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
