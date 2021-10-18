const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const url =  'mongodb://localhost/StudentsDB'

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

// log request
app.use(morgan('tiny'))

// paser request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// parses the text as json
app.use(bodyparser.json());

// mongoDB Connection
mongoose.connect(url)
const con = mongoose.connection

con.on('open', () => {
    console.log("Connected...!")
})

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/students',studentRouter)

const marksRouter = require('./routes/marks')
app.use('/marks',marksRouter)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})