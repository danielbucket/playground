const express = require('express')

const app = express()

if (process.env.NODE_ENV === 'development') {
  console.log('Development mode enabled')
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.common.js')('development')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true
  }))
  app.use(webpackHotMiddleware(compiler))
}

const cors = require('cors')
const path = require('path')
const router = require('./router.js')
const PORT = process.env.PORT || 3648

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, '../dist')))

app.use('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`BucketLab Server is running on localhost:${PORT}`)
})