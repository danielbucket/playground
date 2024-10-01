const stub = require('../stubs/aboutStub')

const GET_AboutContent = async (req, res) => {
  res.status(200).send(JSON.stringify({...stub}))
}

module.exports = {
  GET_AboutContent,
}