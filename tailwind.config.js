/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e6f0ff',
          600: '#4b6cb7',
          700: '#1e3a8a',
          800: '#1e40af',
        },
        dark: {
          DEFAULT: '#1f2937',
          secondary: '#374151'
        }
      }
    }
  },
  plugins: []
}
