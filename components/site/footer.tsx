import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { SUPPORT_EMAIL, SIGN_UP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <Logo variant="aurora" size={26} />
          <span className="font-display text-base font-bold tracking-tight text-ink">Fideson</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-ui text-sm text-muted">
          <a href={SIGN_UP_URL} className="transition-colors hover:text-ink">
            Get started
          </a>
          <Link href="/pricing" className="transition-colors hover:text-ink">
            Pricing
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            Terms
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy
          </Link>
          <Link href="/delete-my-data" className="transition-colors hover:text-ink">
            Data deletion
          </Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="transition-colors hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10 font-ui text-xs text-faint">
        © 2026 Fideson · Platestory Innovations LLP
      </div>
    </footer>
  );
}
