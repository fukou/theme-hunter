const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      'full': '100vh',
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      blueGray:colors.blueGray,
      blue: {
        lighter: '#8A96EE',
        light:'#263BAB',
        DEFAULT:'#13207B',
        dark: '#233B6E',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      white: {
        DEFAULT:'#fff'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      display:['group-hover']
    },
  },
  plugins: [],
}