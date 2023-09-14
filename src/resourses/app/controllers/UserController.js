const User = require('../models/Users')

class UserController {

    login(req, res, next) {
        res.render('user/login')

    }
    register(req, res, next) {
        res.render('user/register')
    }
    registerUser(req, res, next) {
        const user = new User(req.body)
        user.save()
            .then(() => res.redirect('/user/login'))
            .catch(next)
    }
    

}
module.exports = new UserController()