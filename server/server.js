const path = require('path')
const fs = require('fs')
const express = require('express')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
const cors = require('cors')

const app = express()
const router = require('./router.js')
const PORT = process.env.PORT || 3648



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(webpackDevMiddleware(compiler, { publicPath, index: 'playground.html' }))
// app.use(webpackHotMiddleware(compiler))
app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.use('/', (req,res) => {
  const pathToFile = path.resolve(__dirname, '../dist', 'playground.html')
  const fileContent = fs.readFileSync(pathToFile, 'utf-8')


  res.send(fileContent)
  // res.sendFile(pathToFile)
})
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log('PlayGround Server is running on port: ', PORT)
})