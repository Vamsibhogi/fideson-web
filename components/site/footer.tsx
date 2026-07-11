import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { SUPPORT_EMAIL, SIGN_UP_URL } from "@/lib/site";
import { USE_CASES } from "@/data/use-cases";

const PRODUCT = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/manychat-alternative", label: "ManyChat alternative" },
  { href: "/instagram-automation-in", label: "By country" },
  { href: SIGN_UP_URL, label: "Get started" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-my-data", label: "Data deletion" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo variant="aurora" size={26} />
            <span className="font-display text-base font-bold tracking-tight text-ink">Fideson</span>
          </div>
          <p className="mt-3 max-w-xs font-ui text-sm text-muted">
            AI-native Instagram DM &amp; comment automation, built for small businesses.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-3 inline-block font-ui text-sm text-iris hover:text-iris-deep"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>

        <FooterCol title="Product" links={PRODUCT} />

        <div>
          <h3 className="font-ui text-xs font-semibold uppercase tracking-wide text-faint">Use cases</h3>
          <ul className="mt-3 space-y-2 font-ui text-sm">
            {USE_CASES.map((u) => (
              <li key={u.slug}>
                <Link
                  href={`/instagram-automation/${u.slug}`}
                  className="capitalize text-muted transition-colors hover:text-ink"
                >
                  {u.audience}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterCol title="Legal" links={LEGAL} />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10 font-ui text-xs text-faint">
        © 2026 Fideson · Platestory Innovations LLP
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-ui text-xs font-semibold uppercase tracking-wide text-faint">{title}</h3>
      <ul className="mt-3 space-y-2 font-ui text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
