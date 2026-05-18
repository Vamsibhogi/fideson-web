import {
  MessageSquare,
  Inbox,
  MessagesSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader, EARLY_ACCESS_HREF } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HeroVisual } from "@/components/site/hero-visual";

const features = [
  {
    title: "Auto-reply flows",
    body: "Build visual flows that respond to DM keywords, story replies, and post comments — no code, no chatbot jargon.",
    icon: MessageSquare,
  },
  {
    title: "Unified inbox",
    body: "Every conversation in one screen. Hand off any thread to your team with a click — bot pauses, human takes over, then hands back when done.",
    icon: Inbox,
  },
  {
    title: "Comment-to-DM funnels",
    body: "Trigger a private reply the moment someone comments a keyword on your post. Public reply + DM, all from one flow.",
    icon: MessagesSquare,
  },
];

const steps = [
  "Connect your Instagram Business account",
  "Build a flow with the visual builder",
  "Publish — Fideson handles every DM and comment from there",
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div className="space-y-7">
              <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                For Instagram Business accounts
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Stop missing DMs and comments on Instagram.
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Fideson auto-replies, captures leads, and runs flows on your
                Instagram Business account — so you can scale engagement
                without scaling your team.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg">
                  <a href={EARLY_ACCESS_HREF}>Request early access</a>
                </Button>
                <span className="text-sm text-muted-foreground">
                  No credit card. Limited spots.
                </span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border/60 bg-muted/40">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {features.map(({ title, body, icon: Icon }) => (
                <div key={title} className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Three steps from connection to fully automated engagement.
              </p>
            </div>
            <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <li
                  key={step}
                  className="relative rounded-lg border border-border bg-card p-6"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-base font-medium text-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-border/60 bg-muted/40">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-24">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Be among the first to automate your Instagram.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <a href={EARLY_ACCESS_HREF}>Request early access</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
