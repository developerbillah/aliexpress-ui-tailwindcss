/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    fontFamily: {
      openSans : ['Open Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'discount': "url('./dist/assets/img/13.jpeg')",
        'memberOffer': "url('https://ae01.alicdn.com/kf/H863bb19ae5de49a8bd6074a3d81599d9z.jpg_Q90.jpg_.webp')",
       },
      colors: {
        redPraimay : "#FA5156",
        redSecondary: "#FB6A3A"
      }
    },
  },
  plugins: [],
}
