/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['register.html', 'subscription.html'],
  theme: {
    extend: {
      colors: {
        'dark': {
          '100': '#2F2F2F',
          '200': '#2A2A2A',
          '300': '#2B2B2B',
          '400': '#212121',
          '500': '#1B1B1B'
        },
        'light': {
          '100': '#FFFFFF',
          '200': '#EBEBEB',
          '300': '#474747',
          '400': '#E3E3E3'
        }
      },
      backgroundImage: {
        'world-dark': "url('/assets/img/world-dark.png')",
        'world-light': "url('/assets/img/world-light.png')"
      },
      fontFamily: {
        'rajdhani': "'Rajdhani', sans-serif"
      }
    },
  },
  plugins: [],
}

