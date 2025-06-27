/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        12: '12px',
        16: '16px',
      },
      width: {
        '1/5': '20%',
        '4/5': '80%',
        '1/10': '10%',
        '3/10': '30%', 
      },
      fontFamily: {
        fell: ['"IM Fell English"', 'serif'],
        caslon: ['"Libre Caslon Text"', 'serif'],
      }
    },
  },
  plugins: [],
}
