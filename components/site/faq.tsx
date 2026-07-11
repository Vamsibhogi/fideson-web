export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-xl border border-line bg-surface shadow-e1">
      {items.map((it) => (
        <details key={it.q} className="group px-6 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-ink">
            {it.q}
            <span className="ml-4 text-faint transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2 font-ui text-sm text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
