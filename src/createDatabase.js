
//importing modules
const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')


//configuration of env
require("dotenv").config();

// Connect to DATABASE
//uri is in the.env fi-le as MONGODB_URL=mongodb://127.0.0.1:27017/subscribers
const DATABASE_URL = process.env.MONGODB_URL;

//connect to mongoDB
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
//handling error while connection
db.on('error', (err) => console.log(err))
//success message after connection build
db.once('open', () => console.log('Database created...'))

//refresh all connections
const refreshAll = async () => {
    await subscriberModel.deleteMany({})  //deleting previous data
    await subscriberModel.insertMany(data) //inserting new data
    await mongoose.disconnect(); //disconnecting database
}
refreshAll()