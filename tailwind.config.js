/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ["sunset", "nord"],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
