import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/site/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fideson collects, uses, stores, and deletes data when automating DMs and comments for Instagram Business accounts.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> 18 May 2026
      </p>

      <h2>What we collect</h2>
      <p>
        Fideson collects data necessary to provide DM and comment automation
        for Instagram Business accounts our customers have connected to our
        platform. Specifically:
      </p>
      <ul>
        <li>
          Instagram messages (DMs and comment replies) sent to and from the
          connected account
        </li>
        <li>
          Public Instagram profile data of people who message or comment on
          the connected account (username, profile photo, display name)
        </li>
        <li>
          Configuration data our customers create (auto-reply flows, tags,
          contact notes)
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>We use this data only to:</p>
      <ul>
        <li>Deliver the automation features our customers have configured</li>
        <li>Display the conversation history in our customer&apos;s inbox UI</li>
        <li>
          Send messages on behalf of the connected account per the
          customer&apos;s flows
        </li>
      </ul>
      <p>
        We do not sell, rent, or share Platform Data with third parties. We
        do not use Platform Data to build profiles for ad targeting or
        machine learning training outside the customer&apos;s own workspace.
      </p>

      <h2>Data storage</h2>
      <p>
        Data is stored in PostgreSQL hosted by Railway in the US-West region.
        We use industry-standard encryption in transit (TLS) and encrypt
        sensitive credentials at rest.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain message history for as long as the customer&apos;s
        workspace is active. When a workspace is deleted, all associated
        data is purged within 30 days.
      </p>

      <h2>Data deletion requests</h2>
      <p>
        See our <Link href="/data-deletion">Data Deletion page</Link> or
        email{" "}
        <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions:{" "}
        <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>
      </p>
    </LegalShell>
  );
}
