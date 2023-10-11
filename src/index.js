//importing modules
const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

//configuration of env file
require("dotenv").config();

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
//uri is in the.env fi-le as MONGODB_URL=mongodb://127.0.0.1:27017/subscribers
const DATABASE_URL = process.env.MONGODB_URL;
//connection using mongoose
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
//handling error while connection
db.on('error', (err) => console.log(err))
//success message after connection build
db.once('open', () => console.log('connected to database'))

// Starting Server and showing a message to console
module.exports=app.listen(port, () => 
console.log(`App listening on port ${port}!`))
