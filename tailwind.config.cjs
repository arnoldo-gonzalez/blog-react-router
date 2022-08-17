/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      flexGrow: {
        "2": 2
      }
    },
  },
  plugins: [],
}