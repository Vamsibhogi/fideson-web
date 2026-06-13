import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/site/legal-shell";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to delete the data Fideson holds about you or your Instagram account — automatically or on request — what gets deleted, and our timeline.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalShell>
      <h1>Data Deletion</h1>
      <p>
        <strong>Last updated:</strong> 13 June 2026
      </p>
      <p>
        You can delete all data Fideson holds about you or your Instagram account
        at any time. There are three ways to do it — pick whichever is easiest.
      </p>

      <h2>1. Automatically, from Instagram or Facebook</h2>
      <p>
        Remove Fideson from your account&apos;s connected-apps settings:
      </p>
      <ul>
        <li>
          <strong>Instagram:</strong> Settings → Website Permissions / Apps and
          Websites → remove Fideson, or
        </li>
        <li>
          <strong>Facebook:</strong> Settings &amp; Privacy → Settings → Business
          Integrations → remove Fideson.
        </li>
      </ul>
      <p>
        Meta then notifies Fideson through our data-deletion callback, and we
        delete your data automatically. You&apos;ll be shown a confirmation code
        and a link to our{" "}
        <Link href="/data-deletion-status">deletion status page</Link>.
      </p>

      <h2>2. Inside Fideson</h2>
      <p>
        If you use the Fideson app, go to <strong>Settings → Disconnect</strong>.
        This immediately revokes our access and deletes the stored access token
        and your associated account data.
      </p>

      <h2>3. By email</h2>
      <p>
        Email{" "}
        <strong>
          <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>
        </strong>{" "}
        with the Instagram username or business account ID you want deleted and
        confirmation that you control that account. We will:
      </p>
      <ul>
        <li>Acknowledge your request within 48 hours</li>
        <li>Delete all related data within 30 days</li>
        <li>Send written confirmation when deletion is complete</li>
      </ul>

      <h2>What gets deleted</h2>
      <ul>
        <li>All stored Instagram messages to and from your account</li>
        <li>All stored comments and replies tied to your account</li>
        <li>Your contact profile (username, name, profile photo)</li>
        <li>Any tags, notes, custom fields, and flow/automation history tied to your account</li>
        <li>The Instagram access token (revoked and deleted)</li>
      </ul>
      <p>
        Residual copies in encrypted backups are purged on our standard
        backup-rotation cycle (no longer than 30 days).
      </p>

      <h2>How we handle your data</h2>
      <p>
        Our access to and use of Meta Platform data comply with the Meta Platform
        Terms and Developer Policies. For full detail on what we access and why,
        see our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalShell>
  );
}
