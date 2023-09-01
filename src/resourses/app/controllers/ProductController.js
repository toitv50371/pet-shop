
const {Pets, Foods} = require('../models/Pets')
const Carts = require('../models/Carts')


class ProductController {

    index(req, res, next) {
        // pet
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


}
module.exports = new ProductController()