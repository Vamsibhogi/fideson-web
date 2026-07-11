import { Logo } from "@/components/site/logo";

/** A small mock of the product: a DM answered by the AI agent (aurora-bordered). */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative w-full max-w-md select-none">
      <div className="glass rounded-xl p-4 shadow-e3">
        {/* header */}
        <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
          <Logo variant="aurora" size={22} />
          <span className="font-display text-sm font-bold text-ink">Fideson</span>
          <span className="ml-auto rounded-full bg-success/15 px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-wide text-success">
            AI active
          </span>
        </div>

        {/* incoming DM */}
        <div className="mb-2 max-w-[78%]">
          <div className="rounded-lg rounded-tl-sm bg-line-soft px-3 py-2 font-ui text-sm text-ink">
            hey! do you deliver to Jaipur and how much for the cocoa set?
          </div>
        </div>

        {/* AI reply — aurora signature */}
        <div className="mb-2 ml-auto max-w-[82%]">
          <div className="rounded-lg rounded-tr-sm border border-transparent bg-surface px-3 py-2 font-ui text-sm text-ink shadow-e1 [background:linear-gradient(var(--surface),var(--surface))_padding-box,var(--aurora)_border-box]">
            Yes, we deliver to Jaipur 🚚 The cocoa set is ₹899. Want me to hold one and share
            the payment link?
          </div>
          <div className="mt-1 text-right font-ui text-[10px] text-faint">answered by AI · 2s</div>
        </div>

        {/* tool chip */}
        <div className="ml-auto flex max-w-[82%] justify-end gap-1.5">
          <span className="rounded-full bg-iris-soft px-2 py-0.5 font-ui text-[10px] font-medium text-iris">
            tagged: lead
          </span>
          <span className="rounded-full bg-iris-soft px-2 py-0.5 font-ui text-[10px] font-medium text-iris">
            city: Jaipur
          </span>
        </div>
      </div>
    </div>
  );
}
