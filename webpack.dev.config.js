module.exports = {
  entry:  './wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'OceanWiseUGC',
      path:     'builds',
      filename: 'oceanWiseUGC.js',
  },
  module: {
      loaders: [
          {
              test:   /\.js/,
              loader: 'babel',
              include: __dirname,
          }
      ],
  },
};
