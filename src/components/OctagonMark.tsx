// The ORG logo's eight wedge colors, clockwise from the top edge.
const WEDGES = ["#5a43f0", "#9a4dff", "#d04ce8", "#e65aa8", "#f29a3a", "#e4d548", "#6fd84a", "#3ccfe0"];

function v(r: number, k: number): string {
  const a = ((-112.5 + 45 * k) * Math.PI) / 180;
  return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
}

export function OctagonMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden className={className}>
      {WEDGES.map((color, k) => (
        <polygon key={k} points={`50,50 ${v(46, k)} ${v(46, k + 1)}`} fill={color} />
      ))}
      <polygon
        points={Array.from({ length: 8 }, (_, k) => v(46, k)).join(" ")}
        fill="none"
        stroke="var(--frame)"
        strokeWidth={5}
        strokeLinejoin="round"
      />
      {Array.from({ length: 8 }, (_, k) => (
        <line
          key={k}
          x1={50}
          y1={50}
          x2={Number(v(46, k).split(",")[0])}
          y2={Number(v(46, k).split(",")[1])}
          stroke="var(--frame)"
          strokeWidth={3}
        />
      ))}
      <circle cx={50} cy={50} r={9} fill="#fff" />
    </svg>
  );
}
