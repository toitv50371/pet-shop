
const {Foods} = require('../models/Pets')
const Carts = require('../models/Carts')


class FoodController {

    index(req, res, next) {

        Promise.all([Foods.findOne({slug:req.params.slug}).lean(), Carts.countDocuments()])
            .then(([food, counts]) => {
                res.render('food/detailFood',{
                    food: food,
                    counts: counts
                })
            })
            .catch(next)

        
    }
    // create food
    create(req, res, next) {
        res.render('food/createFood')
    }
    store(req, res, next) {
        // res.json(req.body)
        const food = new Foods(req.body)
        food.save()
            .then(() => res.redirect('create'))
            .catch(err => next(err))
    }

}
module.exports = new FoodController()