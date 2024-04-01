/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors:{
      'beige':'#EFE1D1',      
      'green':'#76ABAE',
      'blue':'#5b88a5',
      'white':'#fafaf9',
      'gray':'#171717'
    },
    extend: {},
  },
  plugins: [],
}