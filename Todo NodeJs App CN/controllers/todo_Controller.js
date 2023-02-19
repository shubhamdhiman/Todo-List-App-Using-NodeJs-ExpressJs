// Importing model
const Task = require('../models/taskModel')


// Rendering Home Page
module.exports.todoHome = function(req,res){
    Task.find({},function(err,todo){
        if(err){
            console.log('Error while loading Page');
            return;
        }
        
        return res.render('todoApp',{
            title:"TODO App",
            todoList:todo
        })
    })
}

// Creating todo item
module.exports.addTodo = function(req,res){
    console.log(req.body.date) 
    Task.create({ 
        date: req.body.date,
        category:req.body.category,
        description:req.body.desc,
    },function(err,newArr){
        if(err){
            console.log('Oops error occoured');
            return res.redirect('back');
        }
        return res.redirect('back')
    })
}


// Delete Todo Item
module.exports.deleteTodo = function(req,res){ 
    sp = req.query.id; 
    newsp = sp.split(','); 
    for(let i=0;i<newsp.length;i++){
        Task.findByIdAndDelete(newsp[i],function(err){
            if(err){
                console.log('err')
                return;
            }
        })
    }
return res.redirect('/');
}