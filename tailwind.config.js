module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       a: {
      //         color: '#f6ad55',
      //         'font-weight': 500,
      //         'text-decoration': 'underline',
      //         '&:hover': {},
      //       },
      //     },
      //   },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
