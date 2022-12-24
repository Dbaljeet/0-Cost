/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    minWidth: {
      '300px': '300px',
    },
    gridTemplateColumns: {
      content: 'repeat(auto-fill, minmax(300px, 1fr))',
    },
    extend: {},
  },
  plugins: [],
}
