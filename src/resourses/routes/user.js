const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')

router.get('/:slug', userController.index)

module.exports = router