const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')

router.post('/storeCart', userController.storeCart)
router.delete('/:id', userController.delete)
router.get('/pay', userController.pay)
router.get('/cart', userController.index)


module.exports = router