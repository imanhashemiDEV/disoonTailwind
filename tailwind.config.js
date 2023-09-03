/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily:{
      'dana':'dana',
    },
    extend: { 
      backgroundImage: {
        'destination1': "url('/public/images/dest/dest1.jpg')",
        'destination2': "url('/public/img/dest/dest2.jpg')",
        'destination3': "url('/public/img/dest/dest3.jpg')",
      }
    },
  },
  plugins: [],
}

