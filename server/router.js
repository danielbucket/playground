const express = require('express')
const router = express.Router()

const Home_Controller = require('./controllers/Home_Controller.js')
const About_Controller = require('./controllers/About_Controller.js')
const Contact_Controller = require('./controllers/Contact_Controller.js')
const Projects_Controller = require('./controllers/Projects_Controller.js')

router.get('/home/GET_content', Home_Controller.GET_HomeContent)

router.get('/about/GET_content', About_Controller.GET_AboutContent)

router.get('/contact/GET_content', Contact_Controller.GET_ContactContent)
router.post('/contact/POST_message', Contact_Controller.POST_ContactMessage)

router.get('/projects/GET_content', Projects_Controller.GET_ProjectsList)

module.exports = router