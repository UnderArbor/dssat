
const path = require("path");
const webpack = require('webpack');

module.exports = {
    // entry: path.join(__dirname, "js", "app.js"),
    entry: "./js/app.js",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx']
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public"),
        publicPath: "/"
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    mode: "development"
};