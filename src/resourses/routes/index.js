const express = require('express')

const siteRoute = require('./site')
const productRoute = require('./product')
const foodRoute = require('./food')
const checkoutRoute = require('./checkout')
const userRoute = require('./user')

 

function route(app){

    app.use('/checkout', checkoutRoute)
    app.use('/pets', productRoute)
    app.use('/foods', foodRoute)
    app.use('/user', userRoute)
    app.use('/', siteRoute)

}

module.exports = route