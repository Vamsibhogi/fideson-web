import { Suspense } from "react";
import type { Metadata } from "next";

import { LegalShell } from "@/components/site/legal-shell";
import { StatusIntro } from "./status-intro";

export const metadata: Metadata = {
  title: "Data Deletion Status",
  description:
    "Confirmation that your Fideson data deletion request has been received and processed.",
  alternates: { canonical: "/data-deletion-status" },
  robots: { index: false, follow: false },
};

export default function DataDeletionStatusPage() {
  return (
    <LegalShell>
      <h1>Data Deletion Request Received</h1>

      <Suspense
        fallback={<p>Your data deletion request has been received.</p>}
      >
        <StatusIntro />
      </Suspense>

      <p>
        Your request was processed and any Instagram contact data we stored
        for you has been deleted from Fideson, including:
      </p>
      <ul>
        <li>Stored messages to and from your account</li>
        <li>Your contact profile (username, photo, name)</li>
        <li>Tags, custom fields, and flow history tied to your account</li>
      </ul>
      <p>
        If you need confirmation in writing or have questions, email{" "}
        <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>.
      </p>
    </LegalShell>
  );
}
