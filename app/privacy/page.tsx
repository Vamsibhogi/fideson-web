import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/site/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fideson accesses, uses, stores, and deletes Instagram and Meta Platform data when managing DMs and comments for Instagram professional accounts.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> 12 June 2026
      </p>
      <p>
        Fideson lets businesses receive and respond to their Instagram messages
        and comments from a single inbox. This policy explains exactly what
        information we obtain from Meta Platform (Instagram and Facebook) when you
        connect your account, how we use it, how long we keep it, who we share it
        with, and how you can delete it.
      </p>

      <h2>How the connection works</h2>
      <p>
        To use Fideson you connect your Instagram professional (Business or
        Creator) account — which must be linked to a Facebook Page you manage —
        by signing in through Facebook Login for Business. During this flow, Meta
        asks you to grant Fideson a limited set of permissions. We request only
        the following, and nothing more:
      </p>
      <ul>
        <li>
          <code>instagram_basic</code>
        </li>
        <li>
          <code>instagram_manage_messages</code>
        </li>
        <li>
          <code>instagram_manage_comments</code>
        </li>
        <li>
          <code>pages_show_list</code>
        </li>
      </ul>
      <p>
        You can review or revoke these permissions at any time in your
        Facebook/Instagram settings, or by disconnecting in Fideson.
      </p>

      <h2>Exactly what we access, and why</h2>
      <ul>
        <li>
          <strong>Account profile</strong> (<code>instagram_basic</code>): your
          Instagram account&apos;s ID, username, name, and profile picture, and
          the ID, username, and profile picture of each person in a conversation
          with your account. Used to identify your connected account and to
          display each conversation and contact accurately in your inbox.
        </li>
        <li>
          <strong>Direct messages</strong> (
          <code>instagram_manage_messages</code>): the content, sender,
          recipient, timestamp, and message ID of Instagram Direct messages sent
          to your account, and the messages you send in reply through Fideson.
          Used only to show your incoming messages in your inbox and to send the
          replies you write or approve. We act only on conversations a person
          starts by messaging your business first, and we send messages only
          within Instagram&apos;s permitted messaging window. We never send
          unsolicited or bulk promotional messages.
        </li>
        <li>
          <strong>Comments</strong> (<code>instagram_manage_comments</code>):
          comments on your own Instagram posts (text, author, comment ID, parent
          post) and the replies you publish. Used to let you read and respond to
          comments on your own media and run the automated comment-reply rules you
          configure. We act only on your own posts.
        </li>
        <li>
          <strong>Connected Pages</strong> (<code>pages_show_list</code>): the
          list of Facebook Pages you administer. Used only once, at connection
          time, to locate the Page linked to your Instagram professional account.
        </li>
        <li>
          <strong>Access token</strong>: the credential Meta issues when you
          connect, which lets Fideson perform the actions above on your behalf. It
          is treated as sensitive data and stored encrypted.
        </li>
      </ul>
      <p>
        We do not request, access, or store any other Meta Platform data —
        including ads data, insights, payment information, or data about accounts
        or Pages you have not connected. We do not use this data to build profiles
        for advertising, and we do not use it to train machine-learning models
        outside your own workspace.
      </p>

      <h2>Storage and security</h2>
      <p>
        Data is stored in PostgreSQL hosted by Railway (US-West). We encrypt data
        in transit (TLS) and encrypt access tokens and other sensitive
        credentials at rest. Access is restricted to authorized Fideson systems
        and personnel on a need-to-know basis.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain your connected account information, access token, and the
        messages and comments needed to provide your inbox only while your account
        is connected to Fideson. When you disconnect or delete your workspace, the
        associated data — including the access token — is deleted promptly and
        within 30 days at the latest. Residual copies in encrypted backups are
        purged on our standard backup-rotation cycle (no longer than 30 days).
      </p>

      <h2>How we share data</h2>
      <p>
        We do not sell your data or your customers&apos; data, and we do not share
        it for advertising. We share it only with service providers
        (subprocessors) that operate Fideson on our behalf — specifically cloud
        hosting and database infrastructure — strictly to run the service and
        under written confidentiality and data-protection obligations. We may
        disclose data if required by law or to protect the rights, safety, and
        security of Fideson and its users.
      </p>

      <h2>Your controls and data deletion</h2>
      <ul>
        <li>
          <strong>Disconnect at any time</strong> in Fideson (Settings →
          Disconnect). This revokes our access and deletes the stored access token
          and associated account data.
        </li>
        <li>
          <strong>Request deletion by email</strong> at{" "}
          <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>; we
          complete it within 30 days.
        </li>
        <li>
          <strong>Facebook/Instagram data-deletion requests</strong> are honored
          via our automated callback — see our{" "}
          <Link href="/data-deletion">Data Deletion page</Link>.
        </li>
      </ul>

      <h2>Meta Platform compliance and Limited Use</h2>
      <p>
        Fideson&apos;s access to and use of information obtained through the Meta
        Platform comply with the Meta Platform Terms and the Meta Developer
        Policies. We use Meta Platform data only to provide and improve the
        specific features you have enabled in Fideson, and not for any of the
        following: selling data; using it for advertising or to build advertising
        profiles; transferring it to a data broker, ad network, or monetization
        service; or any purpose unrelated to the service. If we stop using a given
        permission, we delete the data obtained through it.
      </p>

      <h2>Children</h2>
      <p>
        Fideson is a business tool intended for use by people aged 18 and over. We
        do not knowingly collect data from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change the Meta Platform permissions we request or how we use this
        data, we will update this policy and, where required, request your renewed
        consent.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data:{" "}
        <a href="mailto:vamsi.bhogi@gmail.com">vamsi.bhogi@gmail.com</a>
      </p>
    </LegalShell>
  );
}
