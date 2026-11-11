/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#0a0a0a",
        accent: {
          DEFAULT: "#404040",
          light: "#737373",
        },
        bg: "var(--bg)",
        panel: "var(--panel)",
        line: "var(--line)",
        tx: "var(--tx)",
        mut: "var(--mut)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.5)",
        "soft-hover": "0 20px 40px rgba(0,0,0,0.7)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
