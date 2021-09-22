module.exports = {
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'crimson': '#8E1D18',
      'crimson-light': '#99342f',
      'crimson-dark': '#801a16',
      'midnight-black': '#212121',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
