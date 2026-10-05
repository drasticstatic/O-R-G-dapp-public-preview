import { PageHeader, Section, Card } from "@/components/Page";

const CORE_BELIEFS = [
  {
    title: "Entheogens as sacrament",
    body: "We define an entheogen broadly — any substance that can provide a spiritual experience, psychedelic or not. Used responsibly, they're a means of communication, healing, and connection to the divine, not merely recreation.",
  },
  {
    title: "Bodily and spiritual freedom",
    body: "The body is a sacred space. What chemicals go in and what practices are followed should be the individual's choice, guided by education rather than prohibition — while respecting the age and consent of those involved.",
  },
  {
    title: "Non-violence and mutual respect",
    body: "The Universal Creator intends for all humans to be non-violent and to help each other live longer, better lives. Respect for the beliefs of others is a baseline expectation of membership.",
  },
  {
    title: "Freedom of thought",
    body: "Freedom of thought is a right granted to all people — including the right to alter one's own consciousness in pursuit of spiritual understanding.",
  },
  {
    title: "Science alongside spirit",
    body: "Spiritual visions and scientific inquiry are not opposites. A large part of ORG's purpose is proving, through research, what The Universal Creator is and what it intends for humanity.",
  },
  {
    title: "An evolving, not fixed, faith",
    body: "Beliefs should become more true over time as knowledge grows. ORG deliberately avoids treating any single, unchangeable doctrine as final.",
  },
];

export default function BeliefsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Beliefs"
        title="Majority-held ORG beliefs"
        lede="Individual members hold and publish their own spiritual beliefs. Beliefs held by a majority of members are adopted as collective ORG beliefs and published here."
      />

      <Section title="How belief voting works">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Members create a personal profile stating their individual beliefs and research interests.</li>
          <li>All members can vote on each proposed belief, comment on it, and petition to reword or re-vote it.</li>
          <li>Beliefs held by a majority (of at least a few voting members) become collective ORG beliefs.</li>
          <li>Voting is continuous — a belief adopted today can be revisited and changed later as the community grows.</li>
          <li>Voting percentages are made public by default, unless the community votes otherwise.</li>
        </ol>
        <p className="text-sm text-foreground/60">
          Member voting, profiles, and belief submission are being built out
          for this site. For now, this page reflects the founding belief set.
        </p>
      </Section>

      <Section title="Founding beliefs">
        <div className="grid gap-5 sm:grid-cols-2">
          {CORE_BELIEFS.map((b) => (
            <Card key={b.title}>
              <h3 className="font-semibold text-heading">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{b.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Spiritual traditions that inform us">
        <p>
          ORG draws on several existing schools of spiritual thought rather
          than claiming to originate them: <strong>perennialism</strong>{" "}
          (that common themes across world religions point to universal
          truths), <strong>entheism</strong> (the divine is within and we are
          all interconnected), <strong>animism</strong>, and{" "}
          <strong>omnism</strong> (truth and legitimacy can be found across
          many spiritual paths). This list is a starting point, expanded and
          voted on by members over time.
        </p>
      </Section>
    </div>
  );
}
