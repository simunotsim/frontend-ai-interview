/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4f46e5',
          navy: '#0B0F19',
        }
      }
    },
  },
  plugins: [],
}
