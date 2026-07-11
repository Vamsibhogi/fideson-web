// Where the product app lives. Override via NEXT_PUBLIC_APP_URL once the branded
// subdomain (app.fideson.com) is wired; falls back to the current Railway URL so
// links work today.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://web-production-bbd3b.up.railway.app";

export const SIGN_UP_URL = `${APP_URL}/login`;
export const LOG_IN_URL = `${APP_URL}/login`;

// Branded support address. NOTE: requires a mailbox/forwarding to be set up.
export const SUPPORT_EMAIL = "hello@fideson.com";
