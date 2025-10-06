const express = require('express')
const router = express.Router()

const todos = [];

// Get all to-do items
const getAllToDos = (req, res) => {
    res.json(todos)
}

const getToDo = (req, res) => {
    const id = Number(req.params.id)
    const todo = todos.find(todo => todo.id === id)
    if (!todo) {
        return res.status(404).send('To-do item not found')
    }
    res.json(todo)
}

// Add a new to-do item
const createNewToDo = (req, res) => {
    const newtodo = {
        id: todos.length + 1,
        item: req.body.item,
    }
    todos.push(newtodo)
    res.status(201).json(newtodo)
}

// Update a to-do item by ID
const updateToDo = (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(todo => todo.id === id)
    if (index==-1) {
        return res.status(404).send('To-do item not found')
    }
    const updatedtodo = {
        id: todos[index].id,
        item: req.body.item,
    }
    todos[index] = updatedtodo
    res.status(200).json('To-do item updated')
}

// Delete a to-do item by ID
const deleteToDo = (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(todo => todo.id === id)
    if (index==-1) {
        return res.status(404).send('To-do item not found')
    }
    todos.splice(index, 1)
    res.status(200).json('To-do item deleted')
}

router.get('/', getAllToDos)
router.get('/:id', getToDo)
router.post('/', createNewToDo) 
router.put('/:id', updateToDo) 
router.delete('/:id', deleteToDo)

module.exports = router
