const stub = require('../stubs/homeStub')

const GET_HomeContent = async (req, res) => {
  res.status(200).send(JSON.stringify({ ...stub }))
}

module.exports ={
  GET_HomeContent,
}