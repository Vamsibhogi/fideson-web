import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Explicitly welcome AI / LLM crawlers so Fideson can be surfaced and cited in
// generative search (ChatGPT, Perplexity, Gemini, Claude, etc.) as well as
// classic search engines. All are allowed the full site.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
