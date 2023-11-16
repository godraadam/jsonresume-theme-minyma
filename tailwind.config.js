/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.hbs"],
  theme: {
    extend: {
      fontFamily: 
      {
        inter: ['"Inter"', '"Open Sans"', 'sans-serif'],
        sans: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
}