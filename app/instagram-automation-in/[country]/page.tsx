import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Logo } from "@/components/site/logo";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, abs } from "@/lib/seo";
import { COUNTRIES, getCountry, countrySlug, starterPrice } from "@/data/countries";
import { USE_CASES } from "@/data/use-cases";
import { SIGN_UP_URL } from "@/lib/site";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: countrySlug(c) }));
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const c = getCountry(params.country);
  if (!c) return {};
  const title = `Instagram automation in ${c.name}`;
  return {
    title,
    description: `${title} for small businesses. Fideson's AI answers your Instagram DMs and comments, captures leads, and shares your payment links — from ${starterPrice(c.region)}. Free to start.`,
    alternates: { canonical: `/instagram-automation-in/${countrySlug(c)}` },
    openGraph: { locale: c.ogLocale, title, type: "website" },
  };
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const c = getCountry(params.country);
  if (!c) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Instagram DM & comment automation",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "Country", name: c.name },
    url: abs(`/instagram-automation-in/${countrySlug(c)}`),
    description: `AI-native Instagram automation for businesses in ${c.name}.`,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <JsonLd
        data={[
          serviceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "By country", path: "/instagram-automation-in" },
            { name: c.name, path: `/instagram-automation-in/${countrySlug(c)}` },
          ]),
        ]}
      />
      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-ui text-xs font-medium text-iris shadow-e1">
              For businesses in {c.name}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink">
              Instagram automation in {c.name}
            </h1>
            <p className="mt-4 font-ui text-lg text-muted">{c.angle}</p>
            <p className="mt-3 font-ui text-muted">
              Fideson puts an AI agent on your Instagram that answers DMs and comments instantly,
              captures every lead, and shares your payment links — built for {c.sectors}. Pricing
              from <span className="font-semibold text-ink">{starterPrice(c.region)}</span>, with a
              free plan to start.
            </p>
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
                See {c.name} pricing
              </Link>
            </div>
          </div>

          {/* Local example conversation */}
          <div className="glass rounded-xl p-4 shadow-e3">
            <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
              <Logo variant="aurora" size={22} />
              <span className="font-display text-sm font-bold text-ink">Fideson</span>
              <span className="ml-auto rounded-full bg-success/15 px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-wide text-success">
                AI active
              </span>
            </div>
            <div className="mb-2 max-w-[80%] rounded-lg rounded-tl-sm bg-line-soft px-3 py-2 font-ui text-sm text-ink">
              hi, do you deliver to {c.city}? how much?
            </div>
            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-surface px-3 py-2 font-ui text-sm text-ink shadow-e1 [background:linear-gradient(var(--surface),var(--surface))_padding-box,var(--aurora)_border-box]">
              Yes, we deliver to {c.city}! It&apos;s {c.currencyEx}. Want me to share the payment
              link and hold one for you?
            </div>
            <div className="mt-1 text-right font-ui text-[10px] text-faint">answered by AI · 2s</div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <Benefit title="Answers in seconds, 24/7" body={`Your customers in ${c.name} get an instant, on-brand reply — even at 2am — so no enquiry goes cold.`} />
            <Benefit title="Shares your payment links" body={`The agent sends the links your buyers already use — ${c.payments} — at the right moment to close the sale.`} />
            <Benefit title="Captures every lead" body="Every person who messages becomes a saved contact with tags and notes, ready for follow-up." />
          </div>
        </section>

        {/* Internal links: other countries + use cases */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="border-t border-line pt-8">
            <h2 className="font-ui text-xs font-semibold uppercase tracking-wide text-faint">
              Instagram automation in other countries
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-ui text-sm">
              {COUNTRIES.filter((o) => o.code !== c.code).map((o) => (
                <Link
                  key={o.code}
                  href={`/instagram-automation-in/${countrySlug(o)}`}
                  className="text-iris transition-colors hover:text-iris-deep hover:underline"
                >
                  {o.name}
                </Link>
              ))}
            </div>
            <h2 className="mt-8 font-ui text-xs font-semibold uppercase tracking-wide text-faint">
              By business type
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-ui text-sm">
              {USE_CASES.map((u) => (
                <Link
                  key={u.slug}
                  href={`/instagram-automation/${u.slug}`}
                  className="capitalize text-iris transition-colors hover:text-iris-deep hover:underline"
                >
                  {u.audience}
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

function Benefit({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-6 shadow-e1">
      <Check className="h-5 w-5 text-iris" />
      <h3 className="mt-3 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 font-ui text-sm text-muted">{body}</p>
    </div>
  );
}
