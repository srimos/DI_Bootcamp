const express = require('express')
const router = express.Router()

const books = [];

// Get all books
const getAllBooks = (req, res) => {
    res.json(books)
}

const getBook = (req, res) => {
    const id = Number(req.params.id)
    const book = books.find(book => book.id === id)
    if (!book) {
        return res.status(404).send('Book not found')
    }
    res.json(book)
}

// Add a new book
const createNewBook = (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    }
    books.push(newBook)
    res.status(201).json(newBook)
}

// Update a book by ID
const updateBook = (req, res) => {
    const id = Number(req.params.id)
    const index = books.findIndex(book => book.id === id)
    if (index==-1) {
        return res.status(404).send('Book not found')
    }
    const updatedBook = {
        id: books[index].id,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    }
    books[index] = updatedBook
    res.status(200).json('Book updated')
}

// Delete a to-do item by ID
const deleteBook = (req, res) => {
    const id = Number(req.params.id)
    const index = books.findIndex(book => book.id === id)
    if (index==-1) {
        return res.status(404).send('Book not found')
    }
    books.splice(index, 1)
    res.status(200).json('Book deleted')
}

router.get('/', getAllBooks)
router.get('/:id', getBook)
router.post('/', createNewBook) 
router.put('/:id', updateBook) 
router.delete('/:id', deleteBook)

module.exports = router
