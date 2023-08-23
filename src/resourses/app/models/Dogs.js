const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const Schema = mongoose.Schema;
mongoose.plugin(slug);


const Dogs = new Schema({
    name: {type: String},
    age: {type: String},
    sex: {type: String},
    description: {type: String},
    img: {type: String},
    slug: { type: String, slug: "name", unique: true }

})

module.exports = mongoose.model('Dogs', Dogs);