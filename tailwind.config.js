module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    fontFamily: {
      sans: ['Noto Sans TC','Roboto'],
      serif: ['Noto Serif TC','Times'],
      dela: ['Dela Gothic One']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
