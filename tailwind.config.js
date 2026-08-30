/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  daisyui: {
    themes: [
      {
        premiumLight: {
          primary: "#2451CC",
          "primary-content": "#FFFFFF",
          secondary: "#0F8B8D",
          "secondary-content": "#F0FDFD",
          accent: "#C2760C",
          "accent-content": "#1A1200",
          neutral: "#0F172A",
          "neutral-content": "#E5E7EB",
          "base-100": "#FFFFFF",
          "base-200": "#F6F8FB",
          "base-300": "#E4E9F1",
          "base-content": "#111827",
          info: "#0369A1",
          success: "#15803D",
          warning: "#B45309",
          error: "#B91C1C",
        },
      },
      {
        premiumDark: {
          primary: "#5B7CFA",
          "primary-content": "#060A18",
          secondary: "#2DD4BF",
          "secondary-content": "#00201C",
          accent: "#F5B94D",
          "accent-content": "#1A1200",
          neutral: "#0B1220",
          "neutral-content": "#E5E7EB",
          "base-100": "#05070D",
          "base-200": "#0A0F1C",
          "base-300": "#121B30",
          "base-content": "#E7EAF2",
          info: "#38BDF8",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
