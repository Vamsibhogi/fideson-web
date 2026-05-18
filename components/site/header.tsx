import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <Button asChild size="sm">
          <a href={EARLY_ACCESS_HREF}>Request early access</a>
        </Button>
      </div>
    </header>
  );
}

export { EARLY_ACCESS_HREF };
