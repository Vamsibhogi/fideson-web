import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Logo } from "@/components/site/logo";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, abs } from "@/lib/seo";
import { type Country, countrySlug, starterPrice } from "@/data/countries";
import { COUNTRIES } from "@/data/countries";
import { USE_CASES } from "@/data/use-cases";
import { SIGN_UP_URL } from "@/lib/site";
import { STRINGS, LOCALE_LABEL, localesForCountry, type Locale } from "@/lib/i18n";

function pathFor(country: Country, locale: Locale): string {
  const base = `/instagram-automation-in/${countrySlug(country)}`;
  return locale === "en" ? base : `${base}/${locale}`;
}

export function CountryPageBody({ country: c, locale }: { country: Country; locale: Locale }) {
  const t = STRINGS[locale];
  const price = starterPrice(c.region);
  const langs: Locale[] = ["en", ...localesForCountry(c.code)];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Instagram DM & comment automation",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "Country", name: c.name },
    url: abs(pathFor(c, locale)),
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
            { name: c.name, path: pathFor(c, "en") },
          ]),
        ]}
      />
      <main className="flex-1">
        {/* Language switcher (also crawlable hreflang targets) */}
        {langs.length > 1 && (
          <div className="border-b border-line bg-surface">
            <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-2 font-ui text-xs text-muted">
              <span className="text-faint">Language:</span>
              {langs.map((l) => (
                <Link
                  key={l}
                  href={pathFor(c, l)}
                  className={l === locale ? "font-semibold text-iris" : "hover:text-ink"}
                >
                  {LOCALE_LABEL[l]}
                </Link>
              ))}
            </div>
          </div>
        )}

        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-ui text-xs font-medium text-iris shadow-e1">
              {t.badge(c.name)}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink">
              {t.h1(c.name)}
            </h1>
            {locale === "en" && <p className="mt-4 font-ui text-lg text-muted">{c.angle}</p>}
            <p className="mt-3 font-ui text-muted">{t.intro({ sectors: c.sectors, price })}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SIGN_UP_URL}
                className="rounded-md bg-iris px-5 py-3 font-ui text-sm font-semibold text-white shadow-e2 transition-all hover:bg-iris-deep"
              >
                {t.startFree}
              </a>
              <Link
                href="/pricing"
                className="rounded-md border border-line bg-surface px-5 py-3 font-ui text-sm font-semibold text-ink transition-colors hover:bg-iris-soft"
              >
                {t.seePricing(c.name)}
              </Link>
            </div>
          </div>

          <div className="glass rounded-xl p-4 shadow-e3">
            <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
              <Logo variant="aurora" size={22} />
              <span className="font-display text-sm font-bold text-ink">Fideson</span>
              <span className="ml-auto rounded-full bg-success/15 px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-wide text-success">
                AI
              </span>
            </div>
            <div className="mb-2 max-w-[80%] rounded-lg rounded-tl-sm bg-line-soft px-3 py-2 font-ui text-sm text-ink">
              {t.exQuestion(c.city)}
            </div>
            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-surface px-3 py-2 font-ui text-sm text-ink shadow-e1 [background:linear-gradient(var(--surface),var(--surface))_padding-box,var(--aurora)_border-box]">
              {t.exAnswer(c.city, c.currencyEx)}
            </div>
            <div className="mt-1 text-right font-ui text-[10px] text-faint">{t.answeredByAi}</div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <Benefit title={t.b1t} body={t.b1b(c.name)} />
            <Benefit title={t.b2t} body={t.b2b(c.payments)} />
            <Benefit title={t.b3t} body={t.b3b} />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="border-t border-line pt-8">
            <h2 className="font-ui text-xs font-semibold uppercase tracking-wide text-faint">
              {t.otherCountries}
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-ui text-sm">
              {COUNTRIES.filter((o) => o.code !== c.code).map((o) => (
                <Link
                  key={o.code}
                  href={pathFor(o, "en")}
                  className="text-iris transition-colors hover:text-iris-deep hover:underline"
                >
                  {o.name}
                </Link>
              ))}
            </div>
            <h2 className="mt-8 font-ui text-xs font-semibold uppercase tracking-wide text-faint">
              {t.byBusiness}
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
