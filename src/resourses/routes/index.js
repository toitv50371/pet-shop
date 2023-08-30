const express = require('express')

const siteRoute = require('./site')
const productRoute = require('./product')
const foodRoute = require('./food')
const userRoute = require('./user')
 

function route(app){

    app.use('/user', userRoute)
    app.use('/pets', productRoute)
    app.use('/foods', foodRoute)
    app.use('/', siteRoute)

}

module.exports = route