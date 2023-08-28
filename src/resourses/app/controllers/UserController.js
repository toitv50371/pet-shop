
const {Pets, Foods} = require('../models/Pets')


class User {

    index(req, res, next) {
        Pets.find({})
            .then(pets => {
                pets = pets.map(pet => pet.toObject())
                Foods.find({})
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
module.exports = new User()