const express = require('express')
const router = express.Router()
const {getAllCards, getOneCard,  createOneCard, editOneCard, deleteOneCard} = require('../controllers/cardController')

// Getting all 
router.get('/card',getAllCards)
// Getting one
router.get('/card/:id',getOneCard)
// Creating one
router.post('/card',createOneCard)
// Editing one
router.put('/card/:id',editOneCard)
// Deleting one
router.delete('/card/:id',deleteOneCard)

module.exports = router