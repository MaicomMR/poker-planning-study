const path = require('path');

module.exports = {
  target: "node",
  node: false,
  mode: "development",
  entry: path.resolve(__dirname, 'dist', 'js') + "/main.js",
  output: {
    path: path.resolve(__dirname, 'dist/bundle'),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      // exclude: /node_modules/,
      exclude:path.resolve(__dirname, "node_modules"),
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  resolve: {
    fallback: {
      path: false,
    }
  }
};
