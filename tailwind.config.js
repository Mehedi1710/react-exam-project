/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'second': '#2C2643'
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'chivo': ['Chivo', 'sans-serif'],
      },
      backgroundImage: {
        'banner': "url('/src/assets/bg-home.png')",
        'line': "url('/src/assets/line.png')",
      }
    },
  },
  plugins: [],
}