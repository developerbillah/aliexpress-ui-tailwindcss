/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    fontFamily: {
      openSans : ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        redPraimay : "#FA5156",
        redSecondary: "#FB6A3A"
      }
    },
  },
  plugins: [],
}
