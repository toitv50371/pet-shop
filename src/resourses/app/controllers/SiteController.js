
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
    }
    search(req, res, next){
        const inputSearch = req.query.q
        const regex = { $regex: new RegExp('.*'+inputSearch+'.*', 'i')}
        Promise.all([Pets.find({slug: regex}).exec(), Foods.find({slug: regex}).exec()])
            .then(([pets, foods]) => {
                res.render('layouts/search',{
                    pets: pets.map(pet => pet.toObject()),
                    foods: foods.map(food => food.toObject()),
                })
            })
            .catch(next)
    }


}
module.exports = new SiteController()
