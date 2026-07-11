"use client";

const NODES = [
  { x: 8, y: 15 }, { x: 22, y: 8 }, { x: 35, y: 22 }, { x: 12, y: 35 },
  { x: 48, y: 12 }, { x: 60, y: 25 }, { x: 28, y: 45 }, { x: 75, y: 18 },
  { x: 85, y: 40 }, { x: 55, y: 48 }, { x: 40, y: 60 }, { x: 18, y: 58 },
  { x: 70, y: 55 }, { x: 92, y: 62 }, { x: 8, y: 75 }, { x: 30, y: 80 },
  { x: 50, y: 78 }, { x: 65, y: 85 }, { x: 82, y: 78 }, { x: 95, y: 90 },
  { x: 15, y: 92 }, { x: 45, y: 30 }, { x: 78, y: 90 }, { x: 5, y: 50 },
];

function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

const LINKS: [number, number][] = [];
for (let i = 0; i < NODES.length; i++) {
  for (let j = i + 1; j < NODES.length; j++) {
    if (dist(NODES[i], NODES[j]) < 22) LINKS.push([i, j]);
  }
}

export default function NetworkField() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-60 animate-network-drift"
      >
        {LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#0E7490"
            strokeWidth="0.08"
            opacity="0.35"
          />
        ))}
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="0.5"
            fill="#22D3EE"
            className="animate-node-pulse"
            style={{ animationDelay: `${(i % 8) * 0.4}s` }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
    </div>
  );
}