import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryPageBody } from "@/components/site/country-page";
import { abs } from "@/lib/seo";
import { COUNTRIES, getCountryBySlug, countrySlug, starterPrice } from "@/data/countries";
import { localesForCountry } from "@/lib/i18n";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: countrySlug(c) }));
}

/** hreflang map: English + each translated locale for this country, + x-default. */
function hreflang(slug: string, code: string): Record<string, string> {
  const base = `/instagram-automation-in/${slug}`;
  const langs: Record<string, string> = { en: abs(base), "x-default": abs(base) };
  for (const l of localesForCountry(code)) langs[l] = abs(`${base}/${l}`);
  return langs;
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const c = getCountryBySlug(params.country);
  if (!c) return {};
  const title = `Instagram automation in ${c.name}`;
  const slug = countrySlug(c);
  return {
    title,
    description: `${title} for small businesses. Fideson's AI answers your Instagram DMs and comments, captures leads, and shares your payment links — from ${starterPrice(c.region)}. Free to start.`,
    alternates: { canonical: `/instagram-automation-in/${slug}`, languages: hreflang(slug, c.code) },
    openGraph: { locale: "en", title, type: "website" },
  };
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const c = getCountryBySlug(params.country);
  if (!c) notFound();
  return <CountryPageBody country={c} locale="en" />;
}
