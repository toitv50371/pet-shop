
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
        // let payload = req.body.payload.trim()
        // let search = await Pets.find({name: {$regex: new RegExp('^'+payload+'.*', 'i')}}).exec()
        // // Limit search result to 5
        // search = search.slice(0,5)
        // // res.send({payload: search})
        Pets.find({name: { $regex: new RegExp('.*'+req.query.q+'.*', 'i')}}).exec()
            .then((pets) => {
                res.render('layouts/search',{
                    pets: pets.map(pet => pet.toObject()),
                })
            })
            .catch(next)

    }

}
module.exports = new SiteController()