const cardData = require('../models/card')
const getAllCards = (req, res)=>{
    res.json(cardData)
}
const getOneCard = (req, res)=> {
    let card = cardData.filter(card=>card.id==req.params.id)
    res.json(card)
}

const createOneCard = (req, res) => {
    let id = cardData.length + 1
    const newCard = {
        id: id,
        name: req.body.name,
        description: req.body.description,
        level: req.body.level,
        point: req.body.point,
        imageURL: req.body.imageURL
    }
    cardData.push(newCard)
    let url = req.headers.origin + '/card.html'
    console.log(req.headers.origin)
    res.redirect(url);
}

const editOneCard = (req, res)=>{
    cardData.forEach(card=>{
        if(card.id==req.params.id){
            card.name = req.body.name
            card.description = req.body.description
            card.level = req.body.level
            card.point = req.body.point
            card.imageurl = req.body.imageurl
        }
    })
    res.json(cardData)
}
const deleteOneCard = (req, res)=>{
    let index = cardData.findIndex(card => card.id == req.params.id)
    cardData.splice(index, 1)
    res.json(cardData)
}

module.exports = {getAllCards,getOneCard,  createOneCard, editOneCard, deleteOneCard}