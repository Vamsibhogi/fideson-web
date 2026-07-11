/**
 * Fideson "Knot Bubble" mark (shared with the product app). A chat bubble holding
 * two interlocking rings (fides = a knot of trust). "aurora" is the app-glyph
 * treatment on the AI gradient; "plain" inherits currentColor.
 */
function KnotBubble({ size, title }: { size: number; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path d="M11 16 a6 6 0 0 1 6-6 h14 a6 6 0 0 1 6 6 v7 a6 6 0 0 1 -6 6 h-9 l-7 6 v-6 a6 6 0 0 1 -4 -6 Z" />
      <circle cx={20} cy={18.5} r={4} />
      <circle cx={27} cy={18.5} r={4} />
    </svg>
  );
}

export function Logo({
  variant = "plain",
  size = 32,
  className,
  title = "Fideson",
}: {
  variant?: "plain" | "aurora";
  size?: number;
  className?: string;
  title?: string;
}) {
  if (variant === "aurora") {
    const pad = Math.round(size * 0.18);
    return (
      <span
        className={["bg-aurora inline-flex items-center justify-center text-white shadow-e1", className]
          .filter(Boolean)
          .join(" ")}
        style={{
          width: size,
          height: size,
          borderRadius: Math.min(22, Math.round(size * 0.34)),
          padding: pad,
        }}
        role="img"
        aria-label={title}
      >
        <KnotBubble size={size - pad * 2} />
      </span>
    );
  }
  return (
    <span
      className={["inline-flex items-center justify-center", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
    >
      <KnotBubble size={size} title={title} />
    </span>
  );
}
