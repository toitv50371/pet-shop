const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductController')


router.get('/create', productController.create)
router.post('/store', productController.store)
router.get('/boss', productController.indexDog)
router.get('/cat', productController.indexCat)
router.get('/:slug', productController.detail)

module.exports = router