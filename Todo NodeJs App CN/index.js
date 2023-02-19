// Importing Express Library
const express = require('express')

// Calling express function and storing the object in a variable named app
const app = express()

// Creating Port
const port = 8000;

// Getting the path for database
const db = require('./config/mongoose')
const Task = require('./models/taskModel')

// Importing Path module
const path = require("path")

// Letting the middleware to use get the 'value' data from body request
app.use(express.urlencoded()) 
 
// use express router
app.use('/', require('./routes'));

// Serving static files from the path defined below
app.use(express.static('./assets'))

// Setting View Engine
app.set('view engine','ejs')

// Serving html files from the path defined below
app.set('views',path.join(__dirname,'views')) 


app.listen(port,function(err){
    if(err){
        console.log(`Error on listening Port: ${port}`)
        return;
    }
    console.log(`Server is Running on Port: ${port}`)

})

