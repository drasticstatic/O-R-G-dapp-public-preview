import { PageHeader, Section } from "@/components/Page";
import { BeliefItem } from "@/components/Belief";
import { BELIEFS, SPIRITUAL_TRADITIONS } from "@/lib/beliefs";

export default function BeliefsPage() {
  return (
    <div>
      <PageHeader
        id="beliefs"
        title="Beliefs"
        lede="These are held by the majority of ORG members. Each shows who first proposed it and how many members have voted on it so far."
      />

      <Section>
        <p className="text-muted">
          A belief starts on one member&apos;s page. Other members comment to agree or disagree and suggest
          better wording. Once most voting members agree, it moves here, and the list is reordered so the
          strongest agreement sits at the top.
        </p>
      </Section>

      <section className="mx-auto max-w-3xl space-y-14 px-4 pb-10 sm:px-6">
        {BELIEFS.map((b) => (
          <BeliefItem key={b.roman} belief={b} />
        ))}
      </section>

      <Section title="Traditions that inform these beliefs">
        <p className="text-muted">
          Tripp has proposed these schools of thought as starting points, for members to add to and vote on.
        </p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {SPIRITUAL_TRADITIONS.map((t) => (
            <li key={t} className="oct-card oct">
              <span className="oct-inner oct block !px-4 !py-2 text-sm">{t}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
