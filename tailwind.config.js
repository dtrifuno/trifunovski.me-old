const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      gray: colors.warmGray,
      primary: colors.orange,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
