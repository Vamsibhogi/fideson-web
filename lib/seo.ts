// Central SEO facts. Keep everything factual — no invented ratings/testimonials.
export const SITE = {
  url: "https://fideson.com",
  name: "Fideson",
  legalName: "Platestory Innovations LLP",
  tagline: "AI-native Instagram DM & comment automation",
  description:
    "Fideson puts an AI agent on your Instagram that answers DMs and comments instantly, captures leads, books calls, and runs flows. Affordable, easy, and built for small businesses in India, Southeast Asia, and Africa.",
  email: "hello@fideson.com",
  logo: "https://fideson.com/icon.svg",
  // Add real profile URLs here as they go live (used for Organization sameAs).
  sameAs: [] as string[],
};

/** Prices used in Product/Offer structured data (match /pricing). USD, monthly. */
export const OFFERS = [
  { name: "Free", price: "0" },
  { name: "Starter", price: "12" },
  { name: "Pro", price: "29" },
  { name: "Scale", price: "79" },
];

/** Absolute URL for a site-relative path. */
export function abs(path: string): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
