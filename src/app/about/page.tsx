import Link from "next/link";
import { PageHeader, Section, Card } from "@/components/Page";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Us"
        title="Our mission"
        lede="ORG aims to improve the world through advances in the human understanding of spirituality and science — and by building physical spaces where both can be practiced together."
      />

      <Section title="Where science and spirituality meet">
        <p>
          &ldquo;ORG&rdquo; and &ldquo;The ORG&rdquo; stand for The Octagon
          Research Group and Spirituality Centers. The name reflects a
          long-term vision: octagon-shaped spiritual and research centers,
          built to advance humanity&rsquo;s understanding of consciousness,
          well-being, and what founder Tripp Aardema refers to as{" "}
          <em>The Universal Creator</em>.
        </p>
        <p>
          ORG treats belief as something to keep refining rather than settle
          once. This site — and the beliefs published on it — will be updated
          as the community learns more and as member votes change what ORG
          collectively holds to be true. See{" "}
          <Link href="/beliefs" className="text-accent underline">
            Beliefs
          </Link>{" "}
          for how that process works.
        </p>
      </Section>

      <Section title="Founder">
        <Card>
          <h3 className="font-semibold text-heading">
            Tripp Aardema
          </h3>
          <p className="mt-2 text-sm text-foreground/70">
            Tripp founded ORG after a series of entheogenic experiences
            convinced him that spiritual practice and rigorous scientific
            research belong in the same institution rather than separate
            ones. He studies experimental neuroscience and medicinal
            chemistry, with a focus on the therapeutic and spiritual
            potential of entheogens — and on the legal and safety work
            required to make that potential accessible responsibly.
          </p>
          <p className="mt-3 text-sm text-foreground/70">
            His view: entheogens (psychedelic and non-psychedelic alike) have
            been used throughout human history to seek connection with the
            divine, to heal, and to better understand the universe — and that
            responsible, well-regulated access to them is a matter of
            religious and bodily freedom.
          </p>
        </Card>
      </Section>

      <Section title="What we're building">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            A member-governed community that votes on shared beliefs,
            research priorities, and how the organization spends its
            resources.
          </li>
          <li>
            Research into entheogens as tools for healing, understanding
            consciousness, and answering open scientific questions.
          </li>
          <li>
            Eventually, physical Octagon centers — starting with treatment-
            and research-focused facilities, and expanding from there.
          </li>
        </ul>
      </Section>
    </div>
  );
}
