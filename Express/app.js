const express = require('express')
const app = express()
// ////////// No. 1 middleware ///////////////////////
// app.use((req, res, next)=>{
//     console.log('In the middleware!')
//     next()
// })
// app.use((req, res, next)=>{
//     console.log('In another middleware!')
//     next()
// })
// app.use((req, res, next)=>{
//     console.log('In third middleware!')
// })

// ////////////////No. 2 different routes /////////////////
// app.use('/', (req, res, next) => {
//     if(req.originalUrl !== '/favicon.ico'){
//         // res.send('This always runs!')
//         console.log('This always runs!')
//     }
//     next()
// })

// app.use('/', (req, res, next) => {
//     if(req.originalUrl !== '/favicon.ico'){
//         console.log('In another middleware!')
//         res.send('<h1>Home page</h1>')
//     }
// })

// // order of route
// app.use('/login', (req, res, next) => {
//     if(req.originalUrl !== '/favicon.ico'){ 
//         console.log('In third middleware!')
//         res.send('<h1>This is login page</h1>')
//     }
// })

// /////////////////No. 3 get / post //////////////

// // body parser for the post request
// app.use(express.urlencoded({extended: true}))

// app.get('/', (req, res, next) => {
//     res.send('<h1>This is home page</h1>')
// })
// app.get('/create', (req, res, next) => {
//     res.send('<form action="/cards" method="POST"><label>card name:</label><input type="text" name="title"><button type="submit">submit</button></form>')
// })

// app.get('/cards', (req, res, next) => {
//     res.send('<h1>This is cards page</h1>')
// })

// app.post('/cards', (req, res, next) => {
//     // res.send(req.body)
//     console.log(req.body.title)
//     res.redirect('/cards')
// })

////////////// No. 4 route module//////////////////
// const router = express.Router()
// app.use(express.urlencoded({extended: true}))

// router.get('/create', (req, res, next) => {
//     res.send('<form action="/cards" method="POST"><label>card name:</label><input type="text" name="title"><button type="submit">submit</button></form>');
// });

// router.post('/cards', (req, res, next) => {
//     console.log(req.body.title)
//     res.redirect('/cards');
// });

// router.get('/cards', (req, res, next) => {
//     res.send('<h1>This is cards page</h1>');
// });

// app.use(router)


////////////// No. 5 route module//////////////////
const allRoutes = require('./routes/route')

// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))

// convert json to javascript object and put into request body
app.use(express.json())

app.use(allRoutes)

app.use((req, res, next) => {
    res.send('<h1>Page not found</h1>');
});


app.listen(7000, ()=>{
    console.log('server is running........')
})