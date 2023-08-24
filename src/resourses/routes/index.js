const express = require('express')

const siteRoute = require('./site')
const productRoute = require('./product')
 

function route(app){

    app.use('/pets', productRoute)
    app.use('/', siteRoute)

}

module.exports = route