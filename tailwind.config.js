/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}' // Tremor module
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {}
  },

  plugins: []
}
