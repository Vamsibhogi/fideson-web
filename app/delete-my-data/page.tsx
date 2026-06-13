import { redirect } from "next/navigation";

// Canonical data-deletion content lives at /data-deletion. This alias redirects
// there so there's a single source of truth.
export default function DeleteMyDataPage() {
  redirect("/data-deletion");
}
