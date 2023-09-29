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
      'primary': '#1f3357',
      'primary-100': '#bbc8df',
      // 'primary': '#292561',
      'white': '#ffffff',
      'black': '#000000',
      'accent': '#2670b7',
      'floor': '#fafafa',
      'slate': '#fafafa',
      'gray': '#9ca3af',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

