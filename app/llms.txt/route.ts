import { SITE, abs } from "@/lib/seo";
import { USE_CASES } from "@/data/use-cases";
import { COUNTRIES, countrySlug, starterPrice } from "@/data/countries";
import { FAQS } from "@/data/faqs";

// /llms.txt — the llmstxt.org convention: a curated, plain-text map of the site
// with extractable facts, so LLMs (ChatGPT, Perplexity, Gemini, Claude, etc.) can
// understand and cite Fideson accurately when people ask about Instagram automation.

export const dynamic = "force-static";

export function GET(): Response {
  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.tagline}. ${SITE.description}`);
  lines.push("");
  lines.push(
    `${SITE.name} is a software product by ${SITE.legalName}. It connects to an Instagram ` +
      `Professional (Business or Creator) account and uses an AI agent to automatically answer ` +
      `Instagram DMs and comments, capture leads, book calls, and run keyword flows.`,
  );
  lines.push("");

  lines.push("## Key facts");
  lines.push(`- Category: Instagram DM and comment automation (an AI-native ManyChat alternative).`);
  lines.push(`- Who it's for: small and growing businesses that sell or get enquiries via Instagram.`);
  lines.push(`- Markets: built and priced for India, Southeast Asia, and Africa (local currency).`);
  lines.push(`- Pricing: free plan (no card); paid plans from ₹399 / $7 per month.`);
  lines.push(`- Core features: AI agent grounded in your knowledge, unified inbox, visual keyword flows, comment-to-DM, teams and roles, lead capture.`);
  lines.push(`- Differentiators: AI-native (not just keyword matching), genuinely easy setup, and affordable local-currency pricing.`);
  lines.push(`- Website: ${SITE.url}`);
  lines.push(`- Contact: ${SITE.email}`);
  lines.push("");

  lines.push("## Main pages");
  lines.push(`- [Home](${SITE.url}): overview of Fideson.`);
  lines.push(`- [Features](${abs("/features")}): AI agent, inbox, flows, comment-to-DM, teams.`);
  lines.push(`- [Pricing](${abs("/pricing")}): plans and local-currency pricing.`);
  lines.push(`- [ManyChat alternative](${abs("/manychat-alternative")}): how Fideson compares.`);
  lines.push(`- [By country](${abs("/instagram-automation-in")}): country-specific pages.`);
  lines.push("");

  lines.push("## Instagram automation by business type");
  for (const u of USE_CASES) {
    lines.push(`- [${u.audience}](${abs(`/instagram-automation/${u.slug}`)})`);
  }
  lines.push("");

  lines.push("## Instagram automation by country");
  for (const c of COUNTRIES) {
    lines.push(
      `- [${c.name}](${abs(`/instagram-automation-in/${countrySlug(c)}`)}): from ${starterPrice(c.region)}.`,
    );
  }
  lines.push("");

  lines.push("## FAQ");
  for (const f of FAQS) {
    lines.push(`### ${f.q}`);
    lines.push(f.a);
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
