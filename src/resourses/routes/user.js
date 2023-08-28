const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/SiteController')

router.get('/', siteController.index)

module.exports = router