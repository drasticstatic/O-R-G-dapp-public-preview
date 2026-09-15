import { PageHeader, Section, Card } from "@/components/Page";

const CENTER_IDEAS = [
  {
    title: "Treatment & research Octagon",
    body: "A high-rise center near a major city, focused on entheogen-assisted treatment for substance use disorder and addiction — built once protocols and funding are established.",
  },
  {
    title: "Coastal research centers",
    body: "One or more aquatic-research-focused centers along the coastline, studying entheogens alongside marine and environmental science.",
  },
  {
    title: "Food & greenhouse facilities",
    body: "Greenhouses and hydroponic/aeroponic systems at each Octagon, doubling as both a food source for members and a research site for cultivation beyond Earth's boundaries.",
  },
];

export default function InfrastructurePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Infrastructure"
        title="Building the Octagons"
        lede="ORG's long-term vision is to build multiple octagon-shaped spiritual temples and research centers around the world — each one improved by what was learned building the last."
      />

      <Section title="Why an octagon">
        <p>
          The octagon form comes directly from the founder&apos;s
          entheogenic visions and has stayed central to ORG&apos;s identity
          since. Each center is meant to function as both a research
          institution and a spiritual space — not one or the other.
        </p>
      </Section>

      <Section title="Planned center types">
        <div className="grid gap-5 sm:grid-cols-3">
          {CENTER_IDEAS.map((c) => (
            <Card key={c.title}>
              <h3 className="font-semibold text-canopy-deep dark:text-canopy">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="How this gets funded">
        <p>
          Each Octagon is treated as a research project in its own right,
          building on lessons from the one before it. Funding comes from
          member contributions and philanthropic donations — see{" "}
          <a href="/give" className="text-accent underline">
            Gifts &amp; Contributions
          </a>
          . Members vote on how funds raised for infrastructure are
          allocated.
        </p>
      </Section>
    </div>
  );
}
