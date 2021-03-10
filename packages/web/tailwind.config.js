module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '0': '0',
      '131': '131px'
    },
    textColor: theme => theme('colors'),
    textColor: {
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'orange-cab': '#EF7202',
       'white-color': '#000000',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
