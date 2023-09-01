
const {Foods} = require('../models/Pets')
const Carts = require('../models/Carts')


class FoodController {

    index(req, res, next) {
        // food
        Foods.findOne({slug:req.params.slug}).lean()
            .then(food => {
                res.render('food/detailFood',{
                    food: food
                })
            })
            .catch(err => next(err))

        // const btn = document.getElementById('btn__food')
        // btn.addEventListener('click', function clickBtn(){
        //     const cart = new Carts(req.body)
        //     cart.save()
        //     .then(() => res.redirect('detailFood'))

        //     })
        //     .catch(err => next(err))

        
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