const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        's-red': '#da3934',
        'coral': '#a2fddd',
        'midnight': '#001219',
      },
    },
  },
  plugins: [],
}
