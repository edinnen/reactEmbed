const webpack = require('webpack');

module.exports = {
  entry:  './wrapper.js',
  stats: {
    warnings: false,
    errors: false,
  },
  output: {
      libraryTarget: 'var',
      library: 'OceanWiseUGC',
      path:     'builds',
      filename: 'oceanWiseUGC.min.js',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};
