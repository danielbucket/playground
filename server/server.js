const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const cors = require('cors')
const PORT = process.env.PORT || 3648

const app = express()
const webpackConfig = require('../webpack.config')
const { publicPath } = webpackConfig.output
const compiler = webpack(webpackConfig)

const router = require('./router.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  webpackDevMiddleware(compiler, {
    publicPath,
    index: 'playground.html',
  })
)

app.use('/api/v1', router)

app.listen(PORT, ()=> {
  console.log('PlayGround Server is running on port: ', PORT)
})