
const {PetsSchema, FoodsSchema} = require('../models/Pets')


class SiteController {

    index(req, res, next) {
        PetsSchema.find({})
            .then(pets => {
                pets = pets.map(pet => pet.toObject())
            FoodsSchema.find({})
                .then(foods => {
                    foods = foods.map(food => food.toObject())
                    res.render('home',{
                        foods: foods,
                        pets: pets
                    })
                })
                .catch(err => next(err));
            
            })  
            .catch(err => next(err))     
    }

}
module.exports = new SiteController()