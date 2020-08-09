module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      extend: {
          colors: {
              'logoblue': '#3fc1c9',
              'logodark': '#364f6b'
          }
      },
    },
    variants: {},
    plugins: [],
  }