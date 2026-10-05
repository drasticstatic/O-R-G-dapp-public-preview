import Link from "next/link";
import { PageHeader, Section, Card } from "@/components/Page";

export default function LegalPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal"
        title="Legal references & framing"
        lede="ORG's position is that religious freedom protects the right to practice entheogenic spirituality. This page summarizes the references that inform that view — it is not legal advice."
      />

      <Section>
        <Card className="border-accent/40 bg-surface-muted">
          <p className="text-sm">
            Nothing on this page is legal advice. ORG is not a law firm and
            this summary is provided for background only. Anyone with legal
            questions about entheogen use should consult a qualified
            attorney.
          </p>
        </Card>
      </Section>

      <Section title="Freedom of religion & thought">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Murdock v. Pennsylvania (1943)</strong> — the U.S.
            Supreme Court held that a flat license tax on door-to-door
            religious solicitation was an unconstitutional burden on the
            First Amendment&apos;s free exercise, free speech, and free press
            protections, particularly because the taxed activity was central
            to the faith in question.
          </li>
          <li>
            <strong>UN Universal Declaration of Human Rights, Article 18</strong>{" "}
            — everyone has the right to freedom of thought, conscience, and
            religion, including the right to manifest belief in teaching,
            practice, worship, and observance, alone or in community with
            others, in public or private.
          </li>
          <li>
            <strong>International Covenant on Civil and Political Rights, Articles 18 &amp; 27</strong>{" "}
            — reaffirms freedom of religion and belief, and protects the
            right of minority groups to practice their own culture and
            religion.
          </li>
          <li>
            <strong>Cognitive Content Moderation</strong> — legal scholarship
            (Mason Marks) arguing that the First Amendment&apos;s protection
            of freedom of thought extends to protecting subconscious and
            altered-state experience from government restriction.
          </li>
        </ul>
      </Section>

      <Section title="Where ORG stands">
        <p>
          ORG advocates for entheogens to be treated the way other regulated-
          but-legal activities are: through education, licensing, and
          purity/safety standards rather than outright prohibition. As a
          nonprofit, ORG limits its advocacy to a measured share of its
          overall mission, in line with current interpretations of nonprofit
          law.
        </p>
      </Section>

      <Section title="Archive & prior notes">
        <p>
          Earlier internal drafts of ORG&apos;s beliefs and legal notes are
          being organized into this site over time. If you&apos;re looking
          for a reference that isn&apos;t here yet, reach out through{" "}
          <Link href="/community" className="text-accent underline">
            Community
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}
