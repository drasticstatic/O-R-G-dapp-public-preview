import type { Belief as BeliefType, Point } from "@/lib/beliefs";

function fmt(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

export function VoteLine({ agree, votes, by }: { agree: number; votes: number; by: string }) {
  const pct = Math.round((agree / votes) * 100);
  return (
    <div className="mt-3 max-w-sm">
      <div className="flex items-baseline justify-between gap-4 text-sm text-muted">
        <span>Proposed by {by}</span>
        <span>
          {fmt(agree)} of {fmt(votes)} agree
        </span>
      </div>
      <div
        className="vote-bar mt-1.5"
        role="img"
        aria-label={`${fmt(agree)} of ${fmt(votes)} voting members agree`}
      >
        <i style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function PointItem({ point }: { point: Point }) {
  return (
    <li className="grid grid-cols-[2rem_1fr] gap-x-2">
      <span className="text-muted">{point.marker}</span>
      <div>
        <p>{point.text}</p>
        {point.agree !== undefined && point.votes && point.by && (
          <VoteLine agree={point.agree} votes={point.votes} by={point.by} />
        )}
      </div>
    </li>
  );
}

export function BeliefItem({ belief, compact = false }: { belief: BeliefType; compact?: boolean }) {
  return (
    <article className="grid grid-cols-[3.25rem_1fr] gap-x-3 sm:grid-cols-[4.5rem_1fr]">
      <span aria-hidden className="display text-[1.9rem] leading-none text-accent sm:text-[2.4rem]">
        {belief.roman}
      </span>
      <div>
        <h3 className={compact ? "text-xl leading-snug" : "text-[1.35rem] leading-snug"}>
          <span className="sr-only">Belief {belief.roman}. </span>
          {belief.text}
        </h3>
        {belief.agree !== undefined && belief.votes && belief.by && (
          <VoteLine agree={belief.agree} votes={belief.votes} by={belief.by} />
        )}
        {!compact && belief.points && (
          <ol className="mt-5 list-none space-y-4 border-l border-border pl-4">
            {belief.points.map((p) => (
              <PointItem key={p.marker} point={p} />
            ))}
          </ol>
        )}
      </div>
    </article>
  );
}
