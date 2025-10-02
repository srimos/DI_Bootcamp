import express from "express"
const app = express()
import {books} from "./books.js"

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to book-api!")
});

app.get('/api/books', (req, res) => {
    res.json(books)
});

app.get('/api/books/:bookId', (req, res) => {
    const id = Number(req.params.bookId);
    const book = books.find((book) => book.id == id);
    if (!book) {
    return res.status(404).send("Book not found");
    }
    res.json(book);
});

app.post('/api/books', (req, res) => {
    const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});