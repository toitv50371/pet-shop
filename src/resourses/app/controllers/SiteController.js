
const {Pets, Foods} = require('../models/Pets')
const Carts = require('../models/Carts')
const User = require('../models/Users')


class SiteController {

    index(req, res, next) {
        Promise.all([Pets.find({}), Foods.find({}), Carts.countDocuments()])
            .then(([pets, foods, counts]) =>
                res.render('home',{
                    pets: pets.map(pet => pet.toObject()),
                    foods: foods.map(food => food.toObject()),
                    counts: counts                
                })
            )
            .catch(next)    
        User.findById('650138092930a6fd56ac7fbd')
            .then(userInDB => {
                res.user = userInDB

            })
            .catch(next)
    }

}
module.exports = new SiteController()