/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Dark:'#141d2f', Light: '#f6f8ff', Primary: '#0079ff', Secondary: '#fefefe', txtHighContrast: '#2b3442',
      }
    },
  },
  plugins: [],
}

