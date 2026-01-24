/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFADC',
        'dark-purple': '#220020',
        'dark-red': '#560000',
      },
      fontFamily: {
        'roundo': ['Roundo', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
