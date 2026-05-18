import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export function LegalShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16 lg:py-20 prose prose-slate prose-headings:tracking-tight prose-h1:text-4xl prose-h1:font-semibold prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-10 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          {children}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
