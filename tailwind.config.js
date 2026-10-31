/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./backend/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        line: "var(--line)",
        tx: "var(--tx)",
        mut: "var(--mut)",
        accentA: "var(--a)",
        accentB: "var(--b)",
        cta1: "var(--cta1)",
        cta2: "var(--cta2)",
        ok: "var(--ok)",
      },
      fontFamily: {
        sans: ["var(--f)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      animation: {
        "float": "fl 4.5s ease-in-out infinite",
        "pulse-glow": "pl 2.6s infinite",
        "dot": "dot 1.8s infinite",
        "in": "in 0.8s both",
      },
      keyframes: {
        fl: {
          "50%": { transform: "translateY(-14px)" },
        },
        pl: {
          "0%, 100%": { boxShadow: "0 0 24px -4px var(--a)" },
          "50%": { boxShadow: "0 0 54px 6px var(--b)" },
        },
        dot: {
          "0%": { boxShadow: "0 0 0 0 rgba(52,211,153,.7)" },
          "100%": { boxShadow: "0 0 0 12px rgba(52,211,153,0)" },
        },
        in: {
          from: { opacity: "0", transform: "translateY(36px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "22": "22px",
        "18": "18px",
        "14": "14px",
      },
    },
  },
  plugins: [],
};
