const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/index.js',
    output: {
        path: path.resolve('public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },

    devtool: 'source-map'
};
