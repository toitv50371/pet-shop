
const Carts = require('../models/Carts')

class User {

    index(req, res, next) {
        Carts.find({})
            .then(carts => {
                carts = carts.map(cart => cart.toObject())
                res.render('user/pay',{
                    carts : carts
                })
            })
            .catch(err => next)
    }

}
module.exports = new User()