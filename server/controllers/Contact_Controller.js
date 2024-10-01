const contactStub = require('../stubs/contactStub')

const GET_ContactContent = async (req, res) => {
  
  res.status(200).send(JSON.stringify({ ...contactStub }))
}

async function POST_ContactMessage(req,res) {
	// add data to database
	// api query for email
	console.log(('Contact Form @ POST_formSubmit: ', req.body))
	const { firstName } = req.body

	const dbQuery = Object.assign(
		{},
		{ firstName }
	)

	res.status(200).send(JSON.stringify(dbQuery))
}

module.exports = {
  GET_ContactContent,
  POST_ContactMessage,
}