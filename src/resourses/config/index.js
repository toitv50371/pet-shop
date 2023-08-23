const express = require('express')
const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.cqubjma.mongodb.net/pet_shop_database')
        console.log('Connect successfully!!!');
    }catch{
        console.log('Connect failure!!!');
    }
}
module.exports = {connect}
