/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
    },
    colors: {
      'primary': '#292561',
      'white': '#ffffff',
      'black': '#000000',
      'accent': '#2670b7'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

