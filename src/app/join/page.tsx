"use client";

import Link from "next/link";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PageHeader, Section, Card } from "@/components/Page";

export default function JoinPage() {
  const { isConnected, address } = useAccount();

  return (
    <div>
      <PageHeader
        id="join"
        title="Join ORG"
        lede="Membership gives you a profile, a vote on every belief and decision, and a voice in what gets built next."
      />

      <Section title="Connect a wallet">
        <Card>
          <p className="text-sm text-foreground/70">
            ORG membership sign-in is moving to wallet-based identity. Connect
            a wallet to preview the flow — this does not create a live
            membership yet.
          </p>
          <div className="mt-4">
            <ConnectButton />
          </div>
          {isConnected && address && (
            <p className="mt-4 break-all text-xs text-foreground/50">
              Connected as {address}
            </p>
          )}
        </Card>
      </Section>

      <Section title="Soulbound membership (concept)">
        <p>
          One direction under consideration: a non-transferable (soulbound)
          token marking verified ORG membership on-chain — proof of
          membership that can&apos;t be bought, sold, or transferred, only
          earned by joining the community. This is an early concept, not a
          deployed contract, and nothing is minted by connecting your wallet
          above.
        </p>
      </Section>

      <Section title="What comes next">
        <ul className="list-disc space-y-2 pl-5">
          <li>A personal profile with your bio and stated beliefs.</li>
          <li>Voting on beliefs, research priorities, and fund allocation.</li>
          <li>Access to the Sunday community discussion and future events.</li>
        </ul>
        <p className="text-sm text-foreground/60">
          Full membership accounts, profiles, and voting are being built out
          for this site — check back, or reach out through{" "}
          <Link href="/community" className="text-accent underline">
            Community
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}
