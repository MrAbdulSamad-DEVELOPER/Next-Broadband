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
        background: "#07090E",
        secondary: "#0D1420",
        card: "#111B2B",
        "card-hover": "#152236",
        "electric-blue": "#4169FF",
        "electric-cyan": "#42DFFF",
        "accent-red": "#E83D5B",
        "text-primary": "#F5F7FC",
        "text-secondary": "#9AA8BC",
        border: "rgba(150, 180, 220, 0.14)",
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
        glow: "0 0 25px -5px rgba(66, 223, 255, 0.25)",
        "glow-blue": "0 0 30px -5px rgba(65, 105, 255, 0.3)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
