const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductControllder')

router.get('/create', productController.create)
router.post('/store', productController.store)
// router.get('/create-food', productController.createFood)
// router.post('/storeFood', productController.storeFood)
router.get('/:slug', productController.index)

module.exports = router