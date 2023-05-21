/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '155': '155.17px',
        '1532':'1532.48px',
        '895':'895px',
        '516':'516px',
        '698': '698px',
        '416': '416px',
        '576': '576px',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

