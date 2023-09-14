const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')

router.get('/login', userController.login)
router.get('/register', userController.register)
router.post('/registerUser', userController.registerUser)

module.exports = router