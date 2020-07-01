const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
require('dotenv/config')
const app = express()



// Import Routes
const postRoutes = require('./routes/posts')

app.use(body_parser.json())
app.use('/posts', postRoutes, () => console.log('jh'))

// Routes
app.get('/', (req, res) => {
    res.send('we are on home')
})


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('Connect DB!')
})


// How to we start listening to the server
app.listen(3000)
