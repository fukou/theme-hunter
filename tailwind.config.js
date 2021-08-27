const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
  // purge: [
  //   './index.html',
  // ],
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
      red:colors.red,
      violet:colors.violet,
      green:colors.emerald,
      yellow:colors.amber,
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
      sans: ['Favorit', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      display:['group-hover', 'group-focus']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });

        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
}