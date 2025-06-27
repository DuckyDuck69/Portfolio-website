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
        '2/10': '20%',
        '3/10': '30%', 
        
      }
    },
  },
  plugins: [],
}
