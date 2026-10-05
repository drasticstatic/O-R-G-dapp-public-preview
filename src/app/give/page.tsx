import Link from "next/link";
import { PageHeader, Section, Card } from "@/components/Page";
import { DonateForm } from "@/components/DonateForm";

const OFFERINGS = [
  {
    title: "Vaporizer accessories",
    body: "Replacement parts and accessories for safe, controlled sacrament use.",
  },
  {
    title: "3D-printed parts",
    body: "Community-designed and printed hardware shared with members who need them.",
  },
  {
    title: "Laboratory tools",
    body: "Basic tools supporting the safety and research work described on the Research page.",
  },
];

export default function GivePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Gifts and Contributions"
        title="Offerings"
        lede="ORG offers useful objects to members whether or not they can meet a suggested donation — and accepts contributions in return, crypto included."
      />

      <Section title="What ORG offers members">
        <div className="grid gap-5 sm:grid-cols-3">
          {OFFERINGS.map((o) => (
            <Card key={o.title}>
              <h3 className="font-semibold text-heading">
                {o.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{o.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Support ORG">
        <p className="mb-4">
          Contributions fund the community, the research described on the{" "}
          <Link href="/research" className="text-accent underline">
            Research
          </Link>{" "}
          page, and eventually the Octagon centers described under{" "}
          <Link href="/infrastructure" className="text-accent underline">
            Infrastructure
          </Link>
          .
        </p>
        <DonateForm />
      </Section>
    </div>
  );
}
