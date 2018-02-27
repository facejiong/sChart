const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/Chart.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Chart',
    filename: 'schart.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
};
