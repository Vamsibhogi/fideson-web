import type { Metadata } from "next";
import { LegalShell } from "@/components/site/legal-shell";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to request deletion of data Fideson holds about you or your Instagram account, what gets deleted, and our response timeline.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalShell>
      <h1>Data Deletion</h1>
      <p>
        <strong>Last updated:</strong> 18 May 2026
      </p>

      <p>
        You can request deletion of all data Fideson holds about you or your
        Instagram account at any time.
      </p>

      <h2>How to request deletion</h2>
      <p>
        Email{" "}
        <strong>
          <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>
        </strong>{" "}
        with:
      </p>
      <ul>
        <li>The Instagram username or business account ID you want deleted</li>
        <li>Confirmation that you control that account</li>
      </ul>
      <p>We will:</p>
      <ul>
        <li>Acknowledge your request within 48 hours</li>
        <li>Delete all related data within 30 days</li>
        <li>Send a confirmation email when deletion is complete</li>
      </ul>

      <h2>What is deleted</h2>
      <ul>
        <li>All stored messages to/from your account</li>
        <li>Your contact profile (username, photo, name)</li>
        <li>
          Any tags, custom fields, or flow run history tied to your account
        </li>
        <li>The workspace&apos;s Instagram access token (revoked + deleted)</li>
      </ul>
    </LegalShell>
  );
}
