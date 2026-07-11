import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://fideson.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fideson — AI-native Instagram DM & comment automation",
    template: "%s · Fideson",
  },
  description:
    "Fideson answers your Instagram DMs and comments automatically with an AI agent that knows your business — captures leads, books calls, and runs flows. Built for small businesses, priced for India, SE Asia & Africa.",
  applicationName: "Fideson",
  authors: [{ name: "Fideson" }],
  keywords: [
    "Instagram automation",
    "Instagram DM automation",
    "AI Instagram agent",
    "Instagram comment automation",
    "Instagram Business",
    "Manychat alternative",
    "comment-to-DM",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Fideson",
    title: "Fideson — AI-native Instagram DM & comment automation",
    description:
      "An AI agent that answers your Instagram DMs and comments, captures leads, and runs flows. Affordable, and actually easy to use.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fideson — AI-native Instagram DM & comment automation",
    description:
      "An AI agent that answers your Instagram DMs and comments, captures leads, and runs flows.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=bricolage-grotesque:400,500,600,700,800&family=outfit:300,400,500,600,700&family=jetbrains-mono:400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-ui text-ink antialiased">{children}</body>
    </html>
  );
}
