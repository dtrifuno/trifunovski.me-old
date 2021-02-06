'use strict'

const colors = require('tailwindcss/colors')
const config = require('./config')
const themes = require('./themes')

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      ...themes.themes[config.colorTheme],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
