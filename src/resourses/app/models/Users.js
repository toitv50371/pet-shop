const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        equired: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    re_password: {
        type: String,
        required: true,
        unique: true
    },
    cart: {
        items: [{
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Pets',
                required: true
            },
            qty: {
                type: Number,
                required: true,
            }
        }],
        totalPrice: Number
    }
})

usersSchema.method.AddToCard = function(product){
    let cart = this.cart
    if(cart.items.length == 0){
        cart.items.push({productId: product._id, qty: 1})
        cart.totalPrice = product.price
    }else{

    }
    console.log('user', this)

}

module.exports = mongoose.model('User', usersSchema)