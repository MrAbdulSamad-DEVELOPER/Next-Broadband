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
        background: "#0A0F1C",
        secondary: "#0E1526",
        card: "#111827",
        "card-hover": "#162032",
        "electric-cyan": "#00E5FF",
        "fiber-cyan": "#00E5FF",
        "whatsapp-green": "#25D366",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 229, 255, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(0, 229, 255, 0.4)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
