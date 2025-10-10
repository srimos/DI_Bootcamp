import knex from "knex"
import express from "express"

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'c-files',
        password: '',
        database: 'book-api',
        port: 5432
    }
});

async function testConnection() {
  try {
    await db.raw('SELECT 1+1 AS result');
    console.log('✅ Database connection successful!');
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  }
}

await testConnection();

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("Welcome to the book-api")
})

app.get("/api/books",async(req,res)=>{
    try {
        const books = await db("books")
        .select()
        res.json(books);
    } catch (err) {
        console.error("Error fetching books:", err.message);
        res.status(500).json({ error: "Failed to fetch books" });
    }
})

app.get("/api/books/:bookId",async(req,res)=>{
    try {
        const bookId = req.params.bookId
        if (!bookId || isNaN(bookId)) {
            return res.status(400).json({ error: "Invalid bookId" });
        }
        const book = await db("books")
        .where({bookId})
        .first()
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        } else {
        res.status(200).json(book);
        }
    } catch (err) {
        console.error("Error fetching book:", err.message);
        res.status(500).json({ error: "Failed to fetch book" });
    }  
})

app.post("/api/books",async(req,res)=>{
    try {
    const book = await db("books")
    .insert(req.body)
    .returning(['bookId','title','author','publishedYear'])
    res.status(201).json(book);
    } catch (err) {
        console.error("Error creating book:", err.message);
        res.status(500).json({ error: "Failed to create book" });
    } 
})

app.put("/api/books/:bookId",async(req,res)=>{
    try {
        const bookId = req.params.bookId
        if (!bookId || isNaN(bookId)) {
            return res.status(400).json({ error: "Invalid bookId" });
        }
        const [book] = await db("books")
        .where({bookId})
        .update(req.body)
        .returning(['bookId','title','author','publishedYear'])
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        } else {
        res.status(200).json(book);
        }
    } catch (err) {
        console.error("Error updating book:", err.message);
        res.status(500).json({ error: "Failed to update book" });
    } 
})

app.delete("/api/books/:bookId",async(req,res)=>{
    const bookId = req.params.bookId
    try {
    const book = await db("books")
    .where({bookId:bookId})
    .del()
    res.json(book);
  } catch (err) {
    console.error("Error deleting book:", err.message);
    res.status(500).json({ error: "Failed to delete book" });
  }
})

app.listen (5002,()=>{
    console.log("The server is running on port 5002")
})