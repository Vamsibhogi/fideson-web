export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-md select-none"
    >
      <svg
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="55%" stopColor="#c7d2fe" />
            <stop offset="100%" stopColor="#fae8ff" />
          </linearGradient>
          <linearGradient id="hero-primary" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2754d8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="hero-accent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <rect
          x="0"
          y="0"
          width="480"
          height="480"
          rx="32"
          fill="url(#hero-bg)"
        />

        <g opacity="0.55" filter="url(#soft)">
          <circle cx="120" cy="140" r="110" fill="url(#hero-primary)" />
          <circle cx="360" cy="360" r="120" fill="url(#hero-accent)" />
        </g>

        <g opacity="0.9">
          <rect
            x="60"
            y="80"
            width="240"
            height="68"
            rx="14"
            fill="white"
            stroke="rgba(15,23,42,0.06)"
          />
          <circle cx="92" cy="114" r="16" fill="url(#hero-primary)" />
          <rect x="118" y="102" width="120" height="8" rx="4" fill="#cbd5e1" />
          <rect x="118" y="118" width="160" height="8" rx="4" fill="#e2e8f0" />

          <rect
            x="180"
            y="206"
            width="240"
            height="68"
            rx="14"
            fill="white"
            stroke="rgba(15,23,42,0.06)"
          />
          <circle cx="212" cy="240" r="16" fill="url(#hero-accent)" />
          <rect x="238" y="228" width="100" height="8" rx="4" fill="#cbd5e1" />
          <rect x="238" y="244" width="148" height="8" rx="4" fill="#e2e8f0" />

          <rect
            x="60"
            y="332"
            width="240"
            height="68"
            rx="14"
            fill="white"
            stroke="rgba(15,23,42,0.06)"
          />
          <circle cx="92" cy="366" r="16" fill="url(#hero-primary)" />
          <rect x="118" y="354" width="140" height="8" rx="4" fill="#cbd5e1" />
          <rect x="118" y="370" width="92" height="8" rx="4" fill="#e2e8f0" />
        </g>

        <g>
          <path
            d="M300 148 C 340 148, 340 206, 300 206"
            fill="none"
            stroke="rgba(39,84,216,0.35)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M180 274 C 140 274, 140 332, 180 332"
            fill="none"
            stroke="rgba(168,85,247,0.35)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </g>
      </svg>
    </div>
  );
}
