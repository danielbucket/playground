const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware');
const cors = require('cors')

const app = express()
const webpackConfig = require('../webpack.config')()
const router = require('./router.js')
const DIST = webpackConfig.output.path
const PORT = process.env.PORT || 3648
const { publicPath } = webpackConfig.output
const compiler = webpack(webpackConfig)
const { mode } = webpackConfig

console.log('Compile Mode @ Server: ', mode)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

switch (mode) {
  case 'development':
    app.use(webpackDevMiddleware(compiler, { publicPath, index: 'playground.html' }))
    app.use(webpackHotMiddleware(compiler))
    break
  case 'production':
    app.use('/', (req,res) => res.sendFile(path.join(DIST, 'playground.html')))
    break
  default:
    console.log('Compile Mode not set')
}

app.use('/api/v1', router)

app.listen(PORT, ()=> {
  console.log('PlayGround Server is running on port: ', PORT)
})