const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const PetsSchema = new Schema({
    name: {type: String},
    age: {type: String},
    price: {
        type: Number
    },
    type: {type: String},
    img: {type: String},
    slug: { type: String, slug: "name", unique: true }
    }
)

const FoodsSchema = new Schema({
    type: {type: String},
    name: {type: String},
    price: {type: Number},
    brand: {type: String},
    weigh: {type: String},
    img: {type: String},
    slug: { type: String, slug: "name", unique: true }
})



const Pets = mongoose.model('Pets', PetsSchema);
const Foods = mongoose.model('Foods', FoodsSchema);



module.exports =  {Pets, Foods}