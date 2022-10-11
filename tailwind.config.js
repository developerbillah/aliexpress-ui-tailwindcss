/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    fontFamily: {
      openSans : ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        hoverColor : "#FA5156",
      }
    },
  },
  plugins: [],
}
