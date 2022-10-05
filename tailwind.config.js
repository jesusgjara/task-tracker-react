/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", 
    "./public/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}
