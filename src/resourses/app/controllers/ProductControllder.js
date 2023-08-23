
const Dogs = require('../models/Dogs')


class ProductController {

    index(req, res, next) {
        Dogs.find({})
            .then(dogs => {
                dogs = dogs.map(dog => dog.toObject())
                res.render('home',{
                    dogs: dogs
                })
            })
            .catch(err => next(err))
    }
    create(req, res, next) {
        res.render('dog/createDog')
    }
    store(req, res, next) {
        const dog = new Dogs()
        dog.save()
            .then(() => res.redirect('/'))
            .catch(err => next(err))
    }
}
module.exports = new ProductController()