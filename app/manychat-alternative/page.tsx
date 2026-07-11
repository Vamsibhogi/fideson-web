import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SIGN_UP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "A simpler, more affordable ManyChat alternative",
  description:
    "Looking for a ManyChat alternative for Instagram? Fideson is AI-native, genuinely easy to use, and priced for India, SE Asia & Africa in local currency. Free to start.",
  alternates: { canonical: "/manychat-alternative" },
};

// Honest, defensible comparison. Rows describe Fideson's approach; the "others"
// column reflects common patterns in traditional keyword-first tools, stated
// generally rather than as specific claims about any one competitor.
const ROWS: { label: string; fideson: string; others: string; fidesonWin: boolean }[] = [
  { label: "AI that understands questions", fideson: "AI-native — answers in your voice from your knowledge", others: "Often keyword-first; AI is a paid add-on", fidesonWin: true },
  { label: "Pricing for emerging markets", fideson: "Local-currency pricing for India, SE Asia & Africa", others: "Usually US-dollar list prices", fidesonWin: true },
  { label: "Free plan", fideson: "Yes — no card required", others: "Varies; often limited", fidesonWin: true },
  { label: "Ease of setup", fideson: "Guided onboarding, simple defaults", others: "Can be complex to configure", fidesonWin: true },
  { label: "Unified inbox + team", fideson: "Included", others: "Included", fidesonWin: false },
  { label: "Visual keyword flows", fideson: "Included, alongside AI", others: "Core feature", fidesonWin: false },
  { label: "Comment-to-DM", fideson: "Included", others: "Included", fidesonWin: false },
];

const FAQ = [
  { q: "Is Fideson a good ManyChat alternative?", a: "If you want an Instagram automation tool that is AI-native, easy to set up, and priced for markets like India, Southeast Asia, and Africa, Fideson is built exactly for that. It also includes the classics — a unified inbox, visual keyword flows, and comment-to-DM." },
  { q: "Can I move from another tool easily?", a: "Fideson connects to your Instagram account directly, so there's nothing to migrate — connect your account, add your knowledge or a flow, and go live. You can start on the free plan." },
  { q: "How much cheaper is Fideson?", a: "Fideson is priced in your local currency for emerging markets, with paid plans starting from ₹399 / $7 per month and a free plan to start. Exact pricing is shown for your country on the pricing page." },
];

export default function ManychatAlternative() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <JsonLd
        data={[
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "ManyChat alternative", path: "/manychat-alternative" },
          ]),
        ]}
      />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink">
              A simpler, more affordable ManyChat alternative.
            </h1>
            <p className="mt-3 font-ui text-lg text-muted">
              Fideson does what you came for — auto-reply to Instagram DMs and comments — but with
              a real AI agent, an easier setup, and pricing built for your part of the world.
            </p>
            <div className="mt-6">
              <a
                href={SIGN_UP_URL}
                className="rounded-md bg-iris px-5 py-3 font-ui text-sm font-semibold text-white shadow-e2 transition-all hover:bg-iris-deep"
              >
                Start free
              </a>
            </div>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] overflow-hidden rounded-xl border border-line bg-surface shadow-e1">
              <thead>
                <tr className="border-b border-line font-ui text-sm">
                  <th className="px-4 py-3 text-left font-semibold text-ink"> </th>
                  <th className="px-4 py-3 text-left font-semibold text-iris">Fideson</th>
                  <th className="px-4 py-3 text-left font-semibold text-muted">Traditional tools</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-b border-line-soft last:border-0">
                    <td className="px-4 py-3 font-ui text-sm font-medium text-ink">{r.label}</td>
                    <td className="px-4 py-3 font-ui text-sm text-muted">
                      <span className="flex items-start gap-2">
                        {r.fidesonWin ? (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-iris" />
                        ) : (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        )}
                        {r.fideson}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-ui text-sm text-faint">
                      <span className="flex items-start gap-2">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-faint" />
                        {r.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-ui text-xs text-faint">
            Comparison reflects Fideson&apos;s approach versus common patterns in traditional
            keyword-first tools. Features and pricing of other products change — check their sites
            for the latest.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
