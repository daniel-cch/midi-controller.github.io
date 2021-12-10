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
      'crimson': '#6C1B27',
      'crimson-light': '#7b323d',
      'crimson-dark': '#611823',
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
