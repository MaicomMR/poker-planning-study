const path = require('path');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, 'dist', 'js') + "/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },




  target: "node",
  node: false,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.m?js$/,
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env"], // ensure compatibility with older browsers
        //     plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
        //   },
        // },
      },
      {
        test: /\.js$/,
        loader: "webpack-remove-debug", // remove "debug" package
      },
    ],
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  }
};
