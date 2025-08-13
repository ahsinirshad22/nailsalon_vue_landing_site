/**** Tailwind CSS Configuration for NailSalon.Club ****/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A373',
        secondary: '#6B7280',
        darkbg: '#1F2937',
        lightbg: '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
} 