const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const config = require('../webpack.config.dev')
const api = require('./routes/apiRoutes')
const search = require('./routes/searchRoutes')
const firebase = require('./database/firebase')

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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)
app.use('/search', search)

app.get('*', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '..', 'dist/index.html')))
  res.end()
})

app.listen(port, () => {
  firebase.init()
  console.info('==> 🌎 Listening on port %s', port)
})
