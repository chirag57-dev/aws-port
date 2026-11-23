import React from 'react';

/**
 * Returns a simple SVG badge for a given skill id.
 * All icons are inline SVG — no external dependencies.
 */
export function skillIcon(id) {
  const icons = {
    js: <SvgBadge label="JS" color="#f7df1e" textColor="#000" />,
    ts: <SvgBadge label="TS" color="#3178c6" />,
    py: <SvgBadge label="PY" color="#3572A5" />,
    go: <SvgBadge label="GO" color="#00add8" />,
    sql: <SvgBadge label="SQL" color="#336791" />,

    react: <SvgBadge label="⚛" color="#61dafb" textColor="#000" />,
    nextjs: <SvgBadge label="N." color="#fff" textColor="#000" />,
    vue: <SvgBadge label="Vue" color="#42b883" />,
    nuxt: <SvgBadge label="Nxt" color="#00dc82" textColor="#000" />,
    tailwind: <SvgBadge label="TW" color="#38bdf8" textColor="#000" />,

    nodejs: <SvgBadge label="N" color="#339933" />,
    express: <SvgBadge label="Ex" color="#aaa" textColor="#000" />,
    pg: <SvgBadge label="PG" color="#336791" />,
    mongo: <SvgBadge label="DB" color="#47a248" />,
    redis: <SvgBadge label="Re" color="#dc382d" />,
    graphql: <SvgBadge label="GQL" color="#e535ab" />,

    docker: <SvgBadge label="🐳" color="#2496ed" />,
    k8s: <SvgBadge label="K8s" color="#326ce5" />,
    aws: <SvgBadge label="AWS" color="#ff9900" textColor="#000" />,
    vercel: <SvgBadge label="▲" color="#fff" textColor="#000" />,
    ghactions: <SvgBadge label="⚙" color="#2088ff" />,
    cicd: <SvgBadge label="CI" color="#00d4aa" textColor="#000" />,
  };
  return icons[id] ?? <SvgBadge label={id.toUpperCase().slice(0, 3)} color="#444" />;
}

function SvgBadge({ label, color, textColor = '#fff' }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="8" fill={color} />
      <text
        x="20"
        y="20"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={label.length > 2 ? '10' : '14'}
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="700"
        fill={textColor}
      >
        {label}
      </text>
    </svg>
  );
}
