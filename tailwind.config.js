/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Dark:'#141d2f', Light: '#f6f8ff', Primary: '#0079ff', bgSecondary: '#1e2a47', textColorLight: '#2b3442', txtLowContrast: '#697c9a', bgThird: '#141d2f',
      }
    },
  },
  plugins: [],
}

