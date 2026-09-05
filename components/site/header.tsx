import Link from "next/link";
import { Button } from "@/components/ui/button";

const LOG_IN_URL =
  process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL}/login`
    : "https://web-production-bbd3b.up.railway.app/login";

const EARLY_ACCESS_HREF =
  "mailto:vamsi.bhogi@gmail.com?subject=Fideson%20early%20access";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Fideson
        </Link>
        <div className="flex items-center gap-3">
          {/* The product app. Meta App Review reads this site as the app's Site URL, so
              the way into the app has to be visible from here. */}
          <Button asChild size="sm" variant="ghost">
            <a href={LOG_IN_URL}>Log in</a>
          </Button>
          <Button asChild size="sm">
            <a href={EARLY_ACCESS_HREF}>Request early access</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export { EARLY_ACCESS_HREF };
