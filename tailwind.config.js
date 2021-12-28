module.exports = {
  // purge: [
  //   './**/*.html',
  // ],
  darkMode: false,
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
    colors: {
      'crimson': '#C24B3E',
      'crimson-light': '#c85d51',
      'crimson-dark': '#af4438',
      'midnight-black': '#212121',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.8rem',
      'md': '1.4rem',
      'lg': '2.0rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
