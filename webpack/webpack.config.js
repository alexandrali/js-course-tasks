var path = require('path');

module.exports = {
  entry: './app.js',

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  resolve: {
        extensions: ['', '.js', '.json', 'index.js']
    },

  watch: true,

  devtool: 'source-map',
  
  module: {
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' },
      ]
    }

}
