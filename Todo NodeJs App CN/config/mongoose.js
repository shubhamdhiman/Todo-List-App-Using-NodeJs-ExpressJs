// require the library
const mongoose = require('mongoose')

// connecting to database
mongoose.connect('mongodb://localhost/todo_list_db')

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error handling 
db.on('error',console.error.bind(console,"Error on connection"))

// up and running then print the message
db.once('open',function(){
    console.log("successfully connected to database")
})