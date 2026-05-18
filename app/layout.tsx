import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://fideson.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fideson — Instagram DM and comment automation for businesses",
    template: "%s · Fideson",
  },
  description:
    "Fideson auto-replies to Instagram DMs and comments, captures leads, and runs flows on your Instagram Business account — so you can scale engagement without scaling your team.",
  applicationName: "Fideson",
  authors: [{ name: "Fideson" }],
  keywords: [
    "Instagram automation",
    "Instagram DM automation",
    "Instagram comment automation",
    "Instagram Business",
    "Manychat alternative",
    "comment-to-DM",
    "auto-reply flows",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Fideson",
    title: "Fideson — Instagram DM and comment automation for businesses",
    description:
      "Auto-replies, lead capture, and visual flow builder for Instagram Business accounts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fideson — Instagram DM and comment automation",
    description:
      "Auto-replies, lead capture, and visual flow builder for Instagram Business accounts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, "scroll-smooth")}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
