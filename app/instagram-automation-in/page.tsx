import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { COUNTRIES, countrySlug, starterPrice } from "@/data/countries";

export const metadata: Metadata = {
  title: "Instagram automation by country",
  description:
    "Instagram DM & comment automation for small businesses, with local pricing across India, Southeast Asia, and Africa. Find Fideson for your country.",
  alternates: { canonical: "/instagram-automation-in" },
};

export default function CountriesIndex() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink">
              Instagram automation, priced for your country.
            </h1>
            <p className="mt-3 font-ui text-lg text-muted">
              Fideson is built for small businesses across India, Southeast Asia, and Africa — with
              pricing in a currency that makes sense where you are. Pick your country to get started.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTRIES.map((c) => (
              <Link
                key={c.code}
                href={`/instagram-automation-in/${countrySlug(c)}`}
                className="group flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4 shadow-e1 transition-colors hover:bg-iris-soft"
              >
                <span className="font-ui text-sm font-medium text-ink">{c.name}</span>
                <span className="font-ui text-xs text-faint group-hover:text-iris">
                  from {starterPrice(c.region)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
