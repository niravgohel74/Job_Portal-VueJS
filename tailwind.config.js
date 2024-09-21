/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: [ "Rajdhani", 'sans-serif'],
        body: [ "Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      },
      colors: {
        btncolor: '#BDD2E4',
        nfcolor: '#121212',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

