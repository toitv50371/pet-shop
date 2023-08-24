
const Pets = require('../models/Pets')
const Foods = require('../models/Pets')


class SiteController {

    index(req, res, next) {
        Pets.find({})
            .then(pets => {
                pets = pets.map(pet => pet.toObject())
                res.render('home',{
                    pets: pets
                })
            })
            .catch(err => next(err));
        Foods.find({})
            .then(foods => {
                foods = foods.map(food => food.toObject())
                res.render('home',{
                    foods: foods
                })
            })
            .catch(err => next(err));
    }


}
module.exports = new SiteController()