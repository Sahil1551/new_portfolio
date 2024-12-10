/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          anton: ['Anton', 'sans-serif'],
          kanit: ['Kanit', 'sans-serif'],
        
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'custom-purple': 'rgb(109, 40, 217)',
      },
  },
},
  plugins: [],
}