/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#075985',
        facebook: '#3b5998'
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

