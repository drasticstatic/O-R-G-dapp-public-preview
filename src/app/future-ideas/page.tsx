import { PageHeader, Section, Card } from "@/components/Page";

const IDEAS = [
  {
    title: "Member DAO governance",
    body: "If members vote for votes to stay anonymous even from each other, ORG would need on-chain, privacy-preserving voting — this is where a web3 DAO structure could fit naturally.",
  },
  {
    title: "Soulbound membership",
    body: "A non-transferable (soulbound) token representing verified ORG membership — explored on the Join page as an early, non-live concept.",
  },
  {
    title: "The Christian Psychedelic Pilgrimage",
    body: "A group journey retracing biblical locations in Egypt, using entheogens along the way and recording visions with as much scientific rigor as possible.",
  },
  {
    title: "Entheogenic Bible project",
    body: "A collected, cross-referenced text treating each entheogen's experience as its own 'book' — comparable in spirit to how different books of the Bible each offer a distinct perspective.",
  },
];

export default function FutureIdeasPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Future"
        title="Future ideas"
        lede="Future website, app, and experience concepts for ORG — not commitments, just directions the community is considering and voting on."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {IDEAS.map((idea) => (
            <Card key={idea.title}>
              <h3 className="font-semibold text-canopy-deep dark:text-canopy">
                {idea.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{idea.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Have an idea?">
        <p>
          Any member can submit ideas for anything else the community should
          consider. See{" "}
          <a href="/community" className="text-accent underline">
            Community
          </a>{" "}
          for how to get involved.
        </p>
      </Section>
    </div>
  );
}
