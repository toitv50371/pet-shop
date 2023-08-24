
const Pets = require('../models/Pets')
const Foods = require('../models/Pets')



class ProductController {

    index(req, res, next) {
        // dog
        Pets.findOne({slug:req.params.slug}).lean()
            .then(pet => {
                res.render('pet/detailPet',{
                    pet: pet
                })
            })
            .catch(err => next(err))
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

    // create food
    createFood(req, res, next) {
        res.render('pet/createFood')
    }
    storeFood(req, res, next) {
        res.json(req.body)
        // const food = new Foods(req.body)
        // food.save()
        //     .then(() => res.redirect('createFood'))
        //     .catch(err => next(err))
    }
}
module.exports = new ProductController()