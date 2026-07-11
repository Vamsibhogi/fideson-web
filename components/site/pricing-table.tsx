"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SIGN_UP_URL, SUPPORT_EMAIL } from "@/lib/site";

type Currency = "INR" | "USD";

interface Tier {
  id: string;
  name: string;
  tagline: string;
  price: Record<Currency, string>;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}

const TIERS: Tier[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Try it, no card needed",
    price: { INR: "₹0", USD: "$0" },
    features: ["2 live flows", "200 AI replies / mo", "1 seat", "Unified inbox"],
    cta: "Start free",
    href: SIGN_UP_URL,
  },
  {
    id: "starter",
    name: "Starter",
    tagline: "For a growing small business",
    price: { INR: "₹399", USD: "$12" },
    features: ["10 live flows", "2,000 AI replies / mo", "3 seats", "AI agent + knowledge base"],
    cta: "Choose Starter",
    href: SIGN_UP_URL,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For busy teams with real volume",
    price: { INR: "₹1,199", USD: "$29" },
    features: ["40 live flows", "10,000 AI replies / mo", "10 seats", "Everything in Starter"],
    cta: "Choose Pro",
    href: SIGN_UP_URL,
    highlight: true,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "High volume, no limits on flows",
    price: { INR: "₹2,999", USD: "$79" },
    features: ["Unlimited flows", "50,000 AI replies / mo", "25 seats", "Priority support"],
    cta: "Choose Scale",
    href: SIGN_UP_URL,
  },
];

export function PricingTable() {
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <div>
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-lg border border-line bg-surface p-1 shadow-e1">
          {(["INR", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={[
                "rounded-md px-4 py-1.5 font-ui text-sm font-medium transition-colors",
                currency === c ? "bg-iris text-white" : "text-muted hover:text-ink",
              ].join(" ")}
            >
              {c === "INR" ? "India · ₹" : "International · $"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {TIERS.map((t) => (
          <div
            key={t.id}
            className={[
              "flex flex-col rounded-xl border bg-surface p-6",
              t.highlight ? "border-iris shadow-e3" : "border-line shadow-e1",
            ].join(" ")}
          >
            {t.highlight && (
              <span className="mb-3 self-start rounded-full bg-iris-soft px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-wide text-iris">
                Most popular
              </span>
            )}
            <h3 className="font-display text-xl font-bold text-ink">{t.name}</h3>
            <p className="font-ui text-xs text-faint">{t.tagline}</p>
            <div className="mt-4 font-display text-3xl font-extrabold text-ink">
              {t.price[currency]}
              {t.price[currency] !== "₹0" && t.price[currency] !== "$0" && (
                <span className="font-ui text-sm font-normal text-muted"> /mo</span>
              )}
            </div>
            <ul className="mt-5 flex-1 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 font-ui text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-iris" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={t.href}
              className={[
                "mt-6 rounded-md px-4 py-2.5 text-center font-ui text-sm font-semibold transition-all",
                t.highlight
                  ? "bg-iris text-white shadow-e1 hover:bg-iris-deep"
                  : "border border-line text-ink hover:bg-iris-soft",
              ].join(" ")}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border border-line bg-surface p-6 shadow-e1 sm:flex-row sm:items-center">
        <div>
          <div className="font-display text-lg font-bold text-ink">Enterprise</div>
          <div className="font-ui text-xs text-faint">
            Unlimited scale, priority support, custom onboarding.
          </div>
        </div>
        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=Fideson%20Enterprise`}
          className="rounded-md border border-line px-4 py-2 font-ui text-sm font-medium text-ink transition-colors hover:bg-iris-soft"
        >
          Talk to us
        </a>
      </div>

      <p className="mt-6 text-center font-ui text-xs text-faint">
        Special pricing for Southeast Asia & Africa is applied automatically based on your
        country. Prices in local currency, billed monthly, cancel anytime.
      </p>
    </div>
  );
}
