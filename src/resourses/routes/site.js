const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.post('/search', siteController.search)
router.get('/search', siteController.search)
router.get('/', siteController.index)

module.exports = router