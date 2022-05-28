module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'primary': '#FEC6B5',
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
  