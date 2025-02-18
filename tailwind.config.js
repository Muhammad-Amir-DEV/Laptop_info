/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'green-glow':'0 0 10px rbg(0,128,0,0.5),0 0 20px rbg(0,128,0,0.3),0 0 30px rbg(0,128,0,0.2)'
      }
    },
  },
  plugins: [],
}