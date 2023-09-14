const express = require('express')
const router = express.Router()

const checkoutController = require('../app/controllers/CheckOutController')

router.get('/successfully', checkoutController.successfully)
router.post('/storeCart', checkoutController.storeCart)
router.delete('/:id', checkoutController.delete)
router.get('/pay', checkoutController.pay)
router.get('/cart', checkoutController.index)


module.exports = router