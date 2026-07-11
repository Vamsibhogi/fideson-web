import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Inbox, GitBranch, MessageSquare, Users, BarChart3 } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Faq } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { FAQS } from "@/data/faqs";
import { SIGN_UP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features — AI agent, inbox, flows & comment-to-DM",
  description:
    "Everything Fideson does: an AI agent that answers your Instagram DMs and comments, a unified inbox, visual keyword flows, comment-to-DM funnels, teams, and analytics.",
  alternates: { canonical: "/features" },
};

const FEATURES = [
  { icon: Sparkles, title: "AI agent", body: "An AI that answers DMs and comments in your voice, grounded in your prices, FAQs, and policies. It captures leads, sets fields, books calls, and hands off to a human when it should — never inventing answers." },
  { icon: Inbox, title: "Unified inbox", body: "Every conversation in one place with labels, contact notes, unread tracking, and search. Reply by hand any time, or let the AI handle it." },
  { icon: GitBranch, title: "Visual flow builder", body: "Prefer rules? Build keyword, story-reply, and comment flows on a drag-and-drop canvas. Flows run alongside the AI as a dependable fallback." },
  { icon: MessageSquare, title: "Comment-to-DM", body: "Auto-reply to comments publicly and move people into DMs automatically — turn a viral post into a stream of conversations and leads." },
  { icon: Users, title: "Teams & roles", body: "Invite your team, assign roles (owner, admin, agent, viewer), and share one inbox. Everyone sees the same conversations." },
  { icon: BarChart3, title: "Leads & data", body: "Every person who messages becomes a contact with tags and custom fields, so you can qualify, segment, and follow up." },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
          ]),
        ]}
      />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink">
              Everything you need to run Instagram like a pro.
            </h1>
            <p className="mt-3 font-ui text-lg text-muted">
              An AI agent, a shared inbox, visual flows, and comment-to-DM — working together to
              answer every message and capture every lead.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border border-line bg-surface p-6 shadow-e1">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-iris-soft text-iris">
                  <f.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-lg font-semibold text-ink">{f.title}</h2>
                <p className="mt-1.5 font-ui text-sm text-muted">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={SIGN_UP_URL}
              className="rounded-md bg-iris px-5 py-3 font-ui text-sm font-semibold text-white shadow-e2 transition-all hover:bg-iris-deep"
            >
              Start free
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-8 text-center font-display text-3xl font-bold tracking-tight text-ink">
            Frequently asked questions
          </h2>
          <Faq items={FAQS} />
          <p className="mt-6 text-center font-ui text-sm text-muted">
            More questions?{" "}
            <Link href="/pricing" className="font-medium text-iris hover:text-iris-deep">
              See pricing
            </Link>{" "}
            or just start free.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
