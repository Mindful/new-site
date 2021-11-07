const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'default': "Arial, Verdana, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, " +
          "\"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", " +
          "\"Segoe UI Symbol\", \"Noto Color Emoji\""
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: "var(--green)",
      black: colors.black,
      white: colors.white,
      gray: "#e8eded"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
