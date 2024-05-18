/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        cream: "#F4F3F0",
        "black-1": "#1B1A1A",
        black: "#374151",
        coffee: "#331A15",
        cream2: "#E3B577",
      },
    },
  },
  plugins: [require("daisyui")],
};
