const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductControllder')

router.get('/create', productController.create)
router.get('/store', productController.store)
router.get('/', productController.index)

module.exports = router