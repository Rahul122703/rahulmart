/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        expandWidth: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      screens: {
        cardView: "1000px",
        navBarMobile: "885px",
        filterMoile: "689px",
      },
      animation: {
        expandWidth: "expandWidth 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"],
  },
};
