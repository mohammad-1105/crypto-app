/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Ubuntu', 'sans-serif'],
        customFont2:['Raleway Dots','cursive']
      },
    },
  },
  plugins: [],
}

