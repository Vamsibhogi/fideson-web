import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fideson — Instagram DM and comment automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #fae8ff 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #2754d8 0%, #6366f1 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, color: "#0f172a" }}>
            Fideson
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              color: "#0f172a",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Stop missing DMs and comments on Instagram.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#475569",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Auto-replies, lead capture, and visual flow builder for
            Instagram Business accounts.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
