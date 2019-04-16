const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = new express()
const userRouter = require('./user')

app.use(function(req, res, next) {
    //  允许跨域以及携带cookie
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers','*')
    res.header('Access-Control-Allow-Credentials', true)
    next()
})


app.use(cookieParser())
app.use(bodyParser.json())      // parse application/json


app.use('/user', userRouter)

app.listen(9000, function () {
    console.log('server is running on http://localhost:9000')
})