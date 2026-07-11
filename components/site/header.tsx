import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { SIGN_UP_URL, LOG_IN_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="glass sticky top-0 z-40 w-full border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo variant="aurora" size={30} />
          <span className="font-display text-lg font-bold tracking-tight text-ink">Fideson</span>
        </Link>

        <nav className="hidden items-center gap-7 font-ui text-sm text-muted sm:flex">
          <Link href="/#features" className="transition-colors hover:text-ink">
            Features
          </Link>
          <Link href="/#how" className="transition-colors hover:text-ink">
            How it works
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-ink">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3 font-ui text-sm">
          <a href={LOG_IN_URL} className="text-muted transition-colors hover:text-ink">
            Log in
          </a>
          <a
            href={SIGN_UP_URL}
            className="rounded-md bg-iris px-4 py-2 font-medium text-white shadow-e1 transition-all duration-150 ease-spatial hover:bg-iris-deep"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
