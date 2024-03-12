const express = require('express')
const app = express()
const cardRoutes = require('./routes/cardRoute')
// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))

// convert json to javascript object and put into request body
app.use(express.json())
app.use(cardRoutes)
app.listen(7000, ()=>{
    console.log('server is running........')
})