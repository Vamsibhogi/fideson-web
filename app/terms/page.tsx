import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/site/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing access to and use of Fideson, the Instagram DM and comment automation platform for businesses.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell>
      <h1>Terms of Service</h1>
      <p>
        <strong>Last updated:</strong> 19 May 2026
      </p>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and
        use of Fideson (&quot;the Service&quot;), operated by Fideson
        (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By using the
        Service, you agree to these Terms.
      </p>

      <h2>1. Service description</h2>
      <p>
        Fideson is a software-as-a-service platform that helps Instagram
        Business account owners automate direct messages and comment replies
        on their connected Instagram accounts. The Service includes a visual
        flow builder, a unified inbox, and webhook-based event processing.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and have the legal authority to
        bind any business or organization on whose behalf you use the
        Service. You must own or have explicit authorization to manage any
        Instagram account you connect to Fideson.
      </p>

      <h2>3. Account responsibilities</h2>
      <p>You are responsible for:</p>
      <ul>
        <li>Keeping your login credentials secure</li>
        <li>All activity that occurs through your account</li>
        <li>
          Ensuring the Instagram accounts you connect comply with
          Instagram&apos;s Platform Policy and Terms of Use
        </li>
        <li>
          The accuracy and legality of any messages, flows, or replies
          configured in your account
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You agree NOT to use Fideson to:</p>
      <ul>
        <li>Send spam, unsolicited bulk messages, or harassment</li>
        <li>Impersonate others or misrepresent your affiliation</li>
        <li>Violate Instagram&apos;s Platform Policy or Community Guidelines</li>
        <li>
          Scrape, harvest, or collect data from Instagram users without their
          consent
        </li>
        <li>Distribute malware, phishing links, or fraudulent content</li>
        <li>
          Reverse-engineer, decompile, or attempt to access non-public parts
          of the Service
        </li>
      </ul>
      <p>
        Violations may result in immediate account suspension without notice.
      </p>

      <h2>5. Instagram platform terms</h2>
      <p>
        Use of Fideson requires connecting your Instagram Business account
        via Meta&apos;s Instagram API. Your use of those features is also
        subject to Meta&apos;s and Instagram&apos;s terms, policies, and
        platform rules. You are responsible for complying with both.
      </p>

      <h2>6. Data and privacy</h2>
      <p>
        Our handling of your data is described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>. You can request deletion
        of your data at any time per our{" "}
        <Link href="/data-deletion">Data Deletion</Link> page.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        Fideson and its underlying software, design, and brand are owned by
        us. You receive a limited, non-exclusive, non-transferable license to
        use the Service for its intended purpose. You retain ownership of any
        content you upload or configure (flows, messages, contact lists).
      </p>

      <h2>8. Service availability</h2>
      <p>
        We aim for high availability but do not guarantee uninterrupted
        service. The Service is provided &quot;as is&quot; without warranties
        of any kind, express or implied, including merchantability, fitness
        for a particular purpose, or non-infringement.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Fideson and its operators
        shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages arising from your use of the
        Service, including loss of profits, data, or business opportunities.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the Service and request account deletion at any
        time. We may suspend or terminate your account for violations of
        these Terms, abuse, or non-payment (where applicable).
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        communicated via email or in-app notice. Continued use of the Service
        after changes constitutes acceptance.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>
      </p>
    </LegalShell>
  );
}
