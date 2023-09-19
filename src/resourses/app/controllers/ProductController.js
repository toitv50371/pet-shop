
const {Pets, Foods} = require('../models/Pets')
const Carts = require('../models/Carts')


class ProductController {

    indexDog(req, res, next){
        Promise.all([Pets.find({}), Foods.find({}), Carts.countDocuments()])
            .then(([pets, foods, counts]) =>
                res.render('pet/dog',{
                    pets: pets.map(pet => pet.toObject()),
                    foods: foods.map(food => food.toObject()),
                    counts: counts                
                })
            )
            .catch(next)   
    }
    indexCat(req, res, next){
        Promise.all([Pets.find({}), Foods.find({}), Carts.countDocuments()])
            .then(([pets, foods, counts]) =>
                res.render('pet/cat',{
                    pets: pets.map(pet => pet.toObject()),
                    foods: foods.map(food => food.toObject()),
                    counts: counts                
                })
            )
            .catch(next)   
    }

    detail(req, res, next) {

        Promise.all([Pets.findOne({slug:req.params.slug}).lean(), Carts.countDocuments()])
            .then(([pet, counts]) => {
                res.render('pet/detailPet',{
                    pet: pet,
                    counts: counts
                })
            })
            .catch(next)
       
    }
    create(req, res, next) {
        res.render('pet/createPet')
    }
    store(req, res, next) {
        const pet = new Pets(req.body)
        pet.save()
            .then(() => res.redirect('create'))
            .catch(err => next(err))
    }


}
module.exports = new ProductController()