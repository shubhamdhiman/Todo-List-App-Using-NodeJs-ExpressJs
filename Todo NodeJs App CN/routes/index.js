const express = require('express')
const app = express()
const router = express.Router()

// importing controller 
const todoController = require('../controllers/todo_Controller')

// route for home page
router.get('/',todoController.todoHome)

// route to add new item to list
router.post('/new-task',todoController.addTodo)

// route to delete item from list
router.post('/delete_task',todoController.deleteTodo)

// exporting router
module.exports = router
