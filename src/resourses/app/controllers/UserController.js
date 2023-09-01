
const Carts = require('../models/Carts')

class User {

    index(req, res, next) {
        Carts.find({})
        .then(carts => {
            carts = carts.map(cart => cart.toObject())
            res.render('user/cart',{
                carts: carts
            })  
        })
        .catch(err => next)
        
    }
    storeCart(req, res, next) {
        const carts = new Carts(req.body)
        carts.save()
            .then(() => res.redirect('cart'))
            .catch(next)

    }
    delete(req, res, next) {
        Carts.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }

    pay(req, res, next) {
        Carts.find({})
        .then(carts => {
            carts = carts.map(cart => cart.toObject())
            res.render('user/pay',{
                carts: carts
            })  
        })
        .catch(err => next)
    
    }
    

}
module.exports = new User()