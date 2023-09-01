const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')



const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Carts = new Schema({
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    quantity: {type: Number},
    img: {type: String},
    slug: { type: String, slug: "name", unique: true }
    }
)



module.exports = mongoose.model('Carts', Carts);