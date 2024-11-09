const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
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