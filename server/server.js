const path = require('path')
const express = require('express')
const cors = require('cors')
// const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const config = require('../webpack.dev.js')
// const compiler = webpack(config)

const app = express()
const router = require('./router.js')
const PORT = process.env.PORT || 3648

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static(path.resolve(__dirname, '../dist')))

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }))

app.use('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`BucketLab Server is running on localhost:${PORT}`)
})