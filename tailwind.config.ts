/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#171a23',
        gray: '#ADB7BE',
      },
      screens: {
        sm: '576px',
        md: '768px',
      },
    },
  },
  plugins: [],
}
