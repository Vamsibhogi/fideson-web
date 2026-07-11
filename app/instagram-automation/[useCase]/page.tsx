import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Logo } from "@/components/site/logo";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { USE_CASES, getUseCase } from "@/data/use-cases";
import { SIGN_UP_URL } from "@/lib/site";

export function generateStaticParams() {
  return USE_CASES.map((u) => ({ useCase: u.slug }));
}

export function generateMetadata({ params }: { params: { useCase: string } }): Metadata {
  const uc = getUseCase(params.useCase);
  if (!uc) return {};
  return {
    title: uc.title,
    description: uc.description,
    alternates: { canonical: `/instagram-automation/${uc.slug}` },
  };
}

export default function UseCasePage({ params }: { params: { useCase: string } }) {
  const uc = getUseCase(params.useCase);
  if (!uc) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Use cases", path: "/features" },
          { name: uc.audience, path: `/instagram-automation/${uc.slug}` },
        ])}
      />
      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-ui text-xs font-medium text-iris shadow-e1">
              Instagram automation
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink">
              {uc.h1}
            </h1>
            <p className="mt-4 font-ui text-lg text-muted">{uc.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SIGN_UP_URL}
                className="rounded-md bg-iris px-5 py-3 font-ui text-sm font-semibold text-white shadow-e2 transition-all hover:bg-iris-deep"
              >
                Start free
              </a>
              <Link
                href="/pricing"
                className="rounded-md border border-line bg-surface px-5 py-3 font-ui text-sm font-semibold text-ink transition-colors hover:bg-iris-soft"
              >
                See pricing
              </Link>
            </div>
          </div>

          {/* Example conversation mock */}
          <div className="glass rounded-xl p-4 shadow-e3">
            <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
              <Logo variant="aurora" size={22} />
              <span className="font-display text-sm font-bold text-ink">Fideson</span>
              <span className="ml-auto rounded-full bg-success/15 px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-wide text-success">
                AI active
              </span>
            </div>
            <div className="mb-2 max-w-[80%] rounded-lg rounded-tl-sm bg-line-soft px-3 py-2 font-ui text-sm text-ink">
              {uc.example.question}
            </div>
            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-surface px-3 py-2 font-ui text-sm text-ink shadow-e1 [background:linear-gradient(var(--surface),var(--surface))_padding-box,var(--aurora)_border-box]">
              {uc.example.answer}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 pb-16">
          <div className="grid gap-5 sm:grid-cols-3">
            {uc.benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-line bg-surface p-6 shadow-e1">
                <Check className="h-5 w-5 text-iris" />
                <h2 className="mt-3 font-display text-lg font-semibold text-ink">{b.title}</h2>
                <p className="mt-1.5 font-ui text-sm text-muted">{b.body}</p>
              </div>
            ))}
          </div>

          {/* Internal links to sibling use cases (SEO + navigation) */}
          <div className="mt-12 border-t border-line pt-8">
            <h3 className="font-ui text-xs font-semibold uppercase tracking-wide text-faint">
              Instagram automation for other businesses
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-ui text-sm">
              {USE_CASES.filter((o) => o.slug !== uc.slug).map((o) => (
                <Link
                  key={o.slug}
                  href={`/instagram-automation/${o.slug}`}
                  className="text-iris transition-colors hover:text-iris-deep hover:underline"
                >
                  {o.audience}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
