/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#111A28',
        'gray-light': '#B1B8C5',
        'gray-dark': '#5D697E',
      },
    },
  },
  plugins: [],
};
