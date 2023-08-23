const express = require('express')

const productRoute = require('./product') 

function route(app){
    app.use('/', productRoute)

}

module.exports = route