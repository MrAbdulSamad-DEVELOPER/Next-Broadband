/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#FAFAFA",
        obsidian: "#090D16",
        "obsidian-card": "#0F172A",
        royal: {
          DEFAULT: "#1D4ED8",
          hover: "#1E40AF",
          light: "#EFF6FF",
          border: "#DBEAFE",
        },
        emerald: {
          DEFAULT: "#059669",
          hover: "#047857",
          light: "#ECFDF5",
          border: "#A7F3D0",
        },
        ink: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
        border: {
          subtle: "#E2E8F0",
          DEFAULT: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: [
          "'Inter'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "'Plus Jakarta Sans'",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: [
          "'Space Grotesk'",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        card: "0 12px 32px -8px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 20px 40px -12px rgba(15, 23, 42, 0.14)",
        obsidian: "0 20px 50px -10px rgba(15, 23, 42, 0.4)",
        float: "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
