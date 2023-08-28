const express = require('express')

const siteRoute = require('./site')
const productRoute = require('./product')
const foodRoute = require('./food')
 

function route(app){

    app.use('/pets', productRoute)
    app.use('/foods', foodRoute)
    app.use('/', siteRoute)

}

module.exports = route