const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const accessSecret = crypto.randomBytes(64).toString('hex')
console.log(accessSecret)

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { email: req.body.email, password: hashedPassword, role: req.body.role }
        // save this user into database
        
        res.status(201).send(user)
    } catch {
        res.status(500).send("fail")
    }
})

app.post('/login', async (req, res) => {
    // just simulate, we already got the user by req.body.email from database
    const hashedPassword = await bcrypt.hash("123456", 10)
    let user = { email: "abc@gmail.com", password: hashedPassword, role: "teacher" }


    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const userJWT = { email: user.email, role: user.role}
            const accessToken = jwt.sign(userJWT, accessSecret)
            res.send({ accessToken: accessToken})
            
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.get('/', authenticateToken, (req, res) => {
    res.json(req.user)
})

function authenticateToken(req, res, next) {
    // console.log(req.headers)
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, accessSecret, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(7000, () => {
    console.log('server is running........')
})