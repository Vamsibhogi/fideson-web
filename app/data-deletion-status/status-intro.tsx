"use client";

import { useSearchParams } from "next/navigation";

export function StatusIntro() {
  const params = useSearchParams();
  const code = params.get("code");

  if (!code) {
    return <p>Your data deletion request has been received.</p>;
  }

  return (
    <p>
      Your data deletion request has been received. Confirmation code:{" "}
      <code className="font-mono">{code}</code>
    </p>
  );
}
