//importing modules
const express = require('express');
const Subscriber=require("./models/subscribers");
const path=require("path");
//instance of express app
const app = express();

//permission of public folder to use static files
app.use(express.static("public"));

//API to get index.html
app.get("/", (req,res)=>{
   
        res.sendFile(path.join(__dirname, "/index.html"));
  
});


// API to get all subscribers data
app.get("/subscribers", async(req,res)=>{
    try{
            let subscribers=await Subscriber.find();
            res.status(200).send(subscribers); //response data
    } catch(error){
        res.status(500);
    }
});

// API to get all subscribers by name and subscribed channel
app.get("/subscribers/names", async(req,res)=>{
    try{
            let subscribers=await Subscriber.find({}, {name:1, subscribedChannel:1, _id:0});
            res.status(200).send(subscribers); //response data
    } catch(error){
        res.status(500);
    }
});

// API to get subscribers by ID
app.get("/subscribers/:id", async(req,res)=>{
    try{
            let subscribers=await Subscriber.findById(req.params.id);
            res.status(200).send(subscribers); //response data
    } catch(error){ //catching error and show error message
        res.status(400).send({Error_message: "No subscriber found related to this id."});
    }
});



//To handle all unwanted requests
app.use((req,res)=>{
    res.status(400).json({msg:"error - route not found"});
})

module.exports = app;
