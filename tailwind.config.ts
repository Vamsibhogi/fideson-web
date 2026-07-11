import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        // Spatial tokens (backed by CSS vars so light/dark swap for free).
        paper: "var(--bg)",
        surface: "var(--surface)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        iris: {
          DEFAULT: "var(--iris)",
          deep: "var(--iris-deep)",
          soft: "var(--iris-soft)",
        },
        violet: "var(--violet)",
        sky: "var(--sky)",
        teal: "var(--teal)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",

        // Back-compat aliases so the existing legal pages + Button (shadcn class
        // names) keep working without edits, mapped onto Spatial values.
        background: "var(--bg)",
        foreground: "var(--ink)",
        "muted-foreground": "var(--muted)",
        primary: { DEFAULT: "var(--iris)", foreground: "#ffffff" },
        secondary: { DEFAULT: "var(--iris-soft)", foreground: "var(--ink)" },
        accent: { DEFAULT: "var(--iris-soft)", foreground: "var(--ink)" },
        destructive: { DEFAULT: "var(--error)", foreground: "#ffffff" },
        card: { DEFAULT: "var(--surface)", foreground: "var(--ink)" },
        border: "var(--line)",
        input: "var(--line)",
        ring: "var(--iris)",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
        ui: ["Outfit", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "13px",
        lg: "18px",
        xl: "26px",
      },
      boxShadow: {
        e1: "0 1px 2px rgba(20,24,40,.06), 0 2px 8px -4px rgba(20,24,40,.10)",
        e2: "0 12px 32px -18px rgba(40,40,90,.34)",
        e3: "0 26px 64px -30px rgba(86,80,230,.42)",
      },
      transitionTimingFunction: {
        spatial: "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
