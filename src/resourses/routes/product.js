const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductController')


router.get('/create', productController.create)
router.post('/store', productController.store)
router.get('/:slug', productController.index)

module.exports = router