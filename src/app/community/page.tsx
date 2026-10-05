import { PageHeader, Section, Card } from "@/components/Page";

export default function CommunityPage() {
  return (
    <div>
      <PageHeader
        id="community"
        title="Community"
        lede="Meetings, events, ceremonies, membership, and the spiritual organizations ORG connects with."
      />

      <Section title="Weekly gathering">
        <Card>
          <h3 className="text-xl leading-snug">
            Sunday discussion
          </h3>
          <p className="mt-2 text-sm text-foreground/70">
            A 40-minute discussion of spirituality, entheogens, and any
            visions members would like to share. Sundays, 10:00–11:30 (time
            and format to be confirmed as the community grows — check back or
            join to get the current schedule).
          </p>
        </Card>
      </Section>

      <Section title="What membership includes">
        <ul className="list-disc space-y-2 pl-5">
          <li>A personal profile with a bio and stated spiritual/research beliefs.</li>
          <li>A vote on every proposed belief, research direction, and how ORG spends its funds.</li>
          <li>A vote on new member admittance and on the rare circumstances that would warrant removing a member.</li>
          <li>The ability to submit ideas for anything else the community should consider.</li>
          <li>Regular meetings, in person and/or over video chat, to connect with other members.</li>
        </ul>
      </Section>

      <Section title="Ground rules">
        <p>
          ORG welcomes people of all spiritualities, religions, and the lack
          thereof. The one requirement is mutual respect: members are
          expected to respect the beliefs of others and to act without
          violence, especially toward those less able to protect themselves.
          Serious violations — abuse, disrespect for others&apos; beliefs, or
          physical violence — are grounds for the community to vote on
          removal.
        </p>
      </Section>
    </div>
  );
}
