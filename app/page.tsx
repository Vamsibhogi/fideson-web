import Link from "next/link";
import { Sparkles, Inbox, GitBranch, MessageSquare } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HeroVisual } from "@/components/site/hero-visual";
import { SIGN_UP_URL } from "@/lib/site";

const FEATURES = [
  {
    icon: Sparkles,
    title: "An AI agent that knows your business",
    body: "Feed it your prices, FAQs, and policies. It answers DMs in your voice, captures leads, books calls, and hands off to you when it should.",
    aurora: true,
  },
  {
    icon: Inbox,
    title: "One tidy inbox",
    body: "Every DM and comment in one place, with labels, notes, and unread tracking. Your whole team, one shared view.",
  },
  {
    icon: GitBranch,
    title: "Keyword flows too",
    body: "Prefer rules? Build visual auto-reply flows for keywords, story replies, and comments. Run them alongside the AI.",
  },
  {
    icon: MessageSquare,
    title: "Comment-to-DM",
    body: "Reply to comments publicly and slide into DMs automatically to turn engagement into conversations.",
  },
];

const STEPS = [
  { n: "1", title: "Connect Instagram", body: "Link your Instagram professional account in a couple of clicks." },
  { n: "2", title: "Set up your agent", body: "Add your knowledge, pick a voice, or start from a flow template." },
  { n: "3", title: "Go live", body: "Fideson answers DMs and comments 24/7 while you get on with business." },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 font-ui text-xs font-medium text-iris shadow-e1">
              <Sparkles className="h-3.5 w-3.5" /> AI-native · for Instagram Business
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Never miss another DM or comment on Instagram.
            </h1>
            <p className="mt-4 max-w-lg font-ui text-lg text-muted">
              Fideson puts an AI agent on your Instagram that answers instantly, captures every
              lead, and runs your flows. So you scale conversations without scaling your team.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={SIGN_UP_URL}
                className="rounded-md bg-iris px-5 py-3 font-ui text-sm font-semibold text-white shadow-e2 transition-all duration-150 ease-spatial hover:bg-iris-deep"
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
            <p className="mt-3 font-ui text-xs text-faint">
              No credit card · Free plan · Set up in minutes
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink">
            Everything you need to turn Instagram into a sales channel.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-line bg-surface p-6 shadow-e1 transition-shadow duration-150 hover:shadow-e2"
              >
                <div
                  className={[
                    "mb-4 flex h-11 w-11 items-center justify-center rounded-lg",
                    f.aurora ? "bg-aurora text-white" : "bg-iris-soft text-iris",
                  ].join(" ")}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 font-ui text-sm text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Live in three steps.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl border border-line bg-surface p-6 shadow-e1">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-iris text-sm font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 font-ui text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Positioning / pricing nudge */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-e2 sm:p-12">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink">
              Powerful shouldn’t mean expensive.
            </h2>
            <p className="mt-3 max-w-2xl font-ui text-muted">
              Most automation tools are priced for Silicon Valley. Fideson is built for small
              businesses in India, Southeast Asia, and Africa, priced in your currency, and simple
              enough that you’ll actually use it. Start free, upgrade when it’s paying for itself.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SIGN_UP_URL}
                className="rounded-md bg-iris px-5 py-3 font-ui text-sm font-semibold text-white shadow-e1 transition-all hover:bg-iris-deep"
              >
                Start free
              </a>
              <Link
                href="/pricing"
                className="rounded-md border border-line px-5 py-3 font-ui text-sm font-semibold text-ink transition-colors hover:bg-iris-soft"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
