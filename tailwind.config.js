/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        100: "97vmin",
      },
      width: {
        90: "120vmin",
      },
    },
  },
  plugins: [],
};
