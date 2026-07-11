import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { PricingTable } from "@/components/site/pricing-table";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, affordable pricing for Instagram automation. Free to start. Region-based pricing for India, Southeast Asia, and Africa.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink">
              Pricing that makes sense.
            </h1>
            <p className="mt-3 font-ui text-lg text-muted">
              Built for small businesses, priced for your part of the world. Start free, and only
              pay once Fideson is already earning its keep.
            </p>
          </div>
          <PricingTable />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
