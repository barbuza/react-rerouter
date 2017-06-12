const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve('dist'),
    filename: '[chunkhash].js',
  },
  entry: {
    redux: './examples/redux/index.tsx'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
      },
    ],
  },
  devtool: 'sourcemap',
  plugins: [
    new HtmlPlugin(),
  ],
};
