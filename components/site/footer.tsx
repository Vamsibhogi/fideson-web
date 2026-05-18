import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© 2026 Fideson</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/privacy"
            className="hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/data-deletion"
            className="hover:text-foreground"
          >
            Data deletion
          </Link>
          <a
            href="mailto:vamsi.bhogi@gmail.com"
            className="hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
