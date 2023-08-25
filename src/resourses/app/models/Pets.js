const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')

const Schema = mongoose.Schema;
mongoose.plugin(slug);


const Pets = new Schema({
    name: {type: String},
    age: {type: String},
    sex: {type: String},
    price: {type: Number, },
    type: {type: String},
    img: {type: String},
    slug: { type: String, slug: "name", unique: true }

})


const Foods = new Schema({
    type: {type: String},
    name: {type: String},
    price: {type: Number, },
    img: {type: String},
    slug: { type: String, slug: "name", unique: true }
})



const PetsSchema = mongoose.model('Pets', Pets);
const FoodsSchema = mongoose.model('Foods', Foods);



 module.exports =  {PetsSchema, FoodsSchema}