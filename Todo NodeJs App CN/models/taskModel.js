const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    date:{
        type: String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

const Task = mongoose.model('Task',taskSchema)
module.exports = Task;