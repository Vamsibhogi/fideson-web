import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryPageBody } from "@/components/site/country-page";
import { abs } from "@/lib/seo";
import { COUNTRIES, getCountryBySlug, countrySlug, starterPrice } from "@/data/countries";
import {
  STRINGS,
  LOCALE_OG,
  TRANSLATED_LOCALES,
  localesForCountry,
  type Locale,
} from "@/lib/i18n";

export function generateStaticParams() {
  const params: { country: string; lang: string }[] = [];
  for (const c of COUNTRIES) {
    for (const l of localesForCountry(c.code)) {
      params.push({ country: countrySlug(c), lang: l });
    }
  }
  return params;
}

function isTranslated(lang: string): lang is Locale {
  return (TRANSLATED_LOCALES as string[]).includes(lang);
}

function hreflang(slug: string, code: string): Record<string, string> {
  const base = `/instagram-automation-in/${slug}`;
  const langs: Record<string, string> = { en: abs(base), "x-default": abs(base) };
  for (const l of localesForCountry(code)) langs[l] = abs(`${base}/${l}`);
  return langs;
}

export function generateMetadata({
  params,
}: {
  params: { country: string; lang: string };
}): Metadata {
  const c = getCountryBySlug(params.country);
  if (!c || !isTranslated(params.lang) || !localesForCountry(c.code).includes(params.lang)) {
    return {};
  }
  const lang = params.lang;
  const t = STRINGS[lang];
  const slug = countrySlug(c);
  return {
    title: t.h1(c.name),
    description: t.intro({ sectors: c.sectors, price: starterPrice(c.region) }),
    alternates: {
      canonical: `/instagram-automation-in/${slug}/${lang}`,
      languages: hreflang(slug, c.code),
    },
    openGraph: { locale: LOCALE_OG[lang], title: t.h1(c.name), type: "website" },
  };
}

export default function TranslatedCountryPage({
  params,
}: {
  params: { country: string; lang: string };
}) {
  const c = getCountryBySlug(params.country);
  if (!c || !isTranslated(params.lang) || !localesForCountry(c.code).includes(params.lang)) {
    notFound();
  }
  return <CountryPageBody country={c!} locale={params.lang as Locale} />;
}
