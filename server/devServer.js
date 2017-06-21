const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.config.dev')
const api = require('./routes/api')
const search = require('./routes/search')

const app = express()
const port = 3000

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.use('/api', api)
app.use('/search', search)

app.get('*', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '..', 'dist/index.html')))
  res.end()
})

app.listen(port, () => {
  console.info('==> 🌎 Listening on port %s', port)
})
