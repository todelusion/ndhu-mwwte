module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main': '#FEC6B5',
        'second': '#E07658',
        'third': '#F6F6F6'
      }
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
