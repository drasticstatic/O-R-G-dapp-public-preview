import { PageHeader, Section, Card } from "@/components/Page";

const RESEARCH_DIRECTIONS = [
  {
    title: "Entheogens for substance use disorder",
    body: "The most time-pressing direction: investigating how entheogens can help treat addiction and substance use disorder.",
  },
  {
    title: "Safety & purity science",
    body: "Compiling what's known about the safety of each entheogen the community recognizes, including trace-impurity and dosing research, to help members and the public use them more safely.",
  },
  {
    title: "Visionary neuroscience",
    body: "Open questions like why certain colors dominate entheogenic visions, and what that says about how these compounds interact with the visual cortex.",
  },
  {
    title: "Food cultivation beyond Earth",
    body: "Hydroponic and aeroponic cultivation research at each Octagon, aimed at techniques that could one day support growing food off-planet.",
  },
];

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Research"
        title="Research ideas & directions"
        lede="ORG pairs spiritual inquiry with real scientific research. Members vote on which directions get the community's focus and funding."
      />

      <Section>
        <Card className="border-accent/40 bg-surface-muted">
          <p className="text-sm">
            <strong>Research disclaimer:</strong> any research involving
            human participants will go through all applicable legal
            requirements and review boards before it begins. Nothing on this
            page describes an active study.
          </p>
        </Card>
      </Section>

      <Section title="Current directions">
        <div className="grid gap-5 sm:grid-cols-2">
          {RESEARCH_DIRECTIONS.map((r) => (
            <Card key={r.title}>
              <h3 className="font-semibold text-canopy-deep dark:text-canopy">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{r.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="How priorities get set">
        <p>
          Members vote on which areas of research the community focuses on
          first. Where a donor wants funding directed to a specific research
          area, ORG intends to support earmarked giving so contributions go
          exactly where the donor chooses.
        </p>
      </Section>
    </div>
  );
}
