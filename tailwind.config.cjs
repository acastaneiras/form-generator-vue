/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}
