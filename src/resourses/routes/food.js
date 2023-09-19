const express = require('express')
const router = express.Router()

const foodController = require('../app/controllers/FoodController')

router.get('/create', foodController.create)
router.post('/store', foodController.store)
router.get('/food-cat', foodController.foodCat)
router.get('/food-dog', foodController.foodDog)
router.get('/:slug', foodController.index)

module.exports = router