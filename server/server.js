const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')

const app = express()
const router = require('./router.js')
const PORT = process.env.PORT || 3648

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req,res) => {
  const pathToFile = path.resolve(__dirname, '../dist', 'bucketlab.html')
  const fileContent = fs.readFileSync(pathToFile, 'utf-8')
  res.send(fileContent)
})
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`BucketLab Server is running on localhost:${PORT}`)
})