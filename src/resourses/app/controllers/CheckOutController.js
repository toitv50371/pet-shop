
const Carts = require('../models/Carts')
const user = require('../models/Users')

class CheckOut {

    index(req, res, next) {

        Promise.all([Carts.find({}), Carts.countDocuments({})])
            .then(([carts, counts]) => 
                res.render('checkout/cart',{
                    carts: carts.map(cart => cart.toObject()),
                    counts: counts
                })  
            )
            .catch(next)


        
    }
    storeCart(req, res, next) {
        // Carts.findById(req.body.id)
        //     .then(product => {
        //         req.user.storeCart(product)

        //         res.redirect('/cart')
        //     })
        //     .catch(next)
        const carts = new Carts(req.body)
        carts.save()
            .then(() => 
            res.redirect('cart'))
            .catch(next)

    }
    delete(req, res, next) {
        Carts.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }

    pay(req, res, next) {
        Promise.all([Carts.find({}), Carts.countDocuments()])
            .then(([carts, counts]) => {
                res.render('checkout/pay',{
                    carts: carts.map(cart => cart.toObject()),
                    counts: counts
                }) 
            })
            .catch(err => next)
    
    }
    successfully(req, res, next) {
        Carts.deleteMany({})
            .then(()=> {
                res.render('checkout/successfully')
            })
            .catch(next)
    }
    

}
module.exports = new CheckOut()