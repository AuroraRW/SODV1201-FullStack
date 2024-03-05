const express = require('express')
const router = express.Router()

router.get('/create', (req, res, next) => {
    res.send('<form action="/cards" method="POST"><label>card name:</label><input type="text" name="title"><button type="submit">submit</button></form>');
});

router.post('/cards', (req, res, next) => {
    console.log(req.body.title)
    res.redirect('/cards');
});

router.get('/cards', (req, res, next) => {
    res.send('<h1>This is cards page</h1>');
});

module.exports = router