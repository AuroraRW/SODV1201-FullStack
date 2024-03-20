const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: String,
    level: String,
    point: String,
    imageurl: String
},{collection:'cards'})

module.exports = mongoose.model('Card', cardSchema)