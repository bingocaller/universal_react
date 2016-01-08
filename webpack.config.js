var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(process.cwd(), 'client-render.js'),
    scss: './stylesheets/main.scss'
  },
  output: {
    path: './public/',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks: true
    })
  ]
};
