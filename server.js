const express = require("express")
const path = require('path')

const jdssat = require('jdssat')
// jdssat.initialize()

const app = express()
const port = 3000

const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)

app.use(webpackHotMiddleware(compiler))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})