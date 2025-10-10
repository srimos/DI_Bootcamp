import knex from "knex"
import express from "express"

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'c-files',
        password: '',
        database: 'blog-api',
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
    res.json("Welcome to the blog-api")
})

app.get("/api/posts",async(req,res)=>{
    try {
    const posts = await db("posts")
    .select()
    res.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
})

app.get("/api/posts/:id",async(req,res)=>{
    const id = req.params.id
    try {
    const posts = await db("posts")
    .where({id:id})
    res.json(posts);
  } catch (err) {
    console.error("Error fetching post:", err.message);
    res.status(500).json({ error: "Failed to fetch post" });
  }
})

app.post("/api/posts",async(req,res)=>{
    try {
    const posts = await db("posts")
    .insert(req.body)
    .returning(['id','title','content'])
    res.json(posts);
  } catch (err) {
    console.error("Error creating posts:", err.message);
    res.status(500).json({ error: "Failed to create posts" });
  }
})

app.put("/api/posts/:id",async(req,res)=>{
    const id = req.params.id
    try {
    const posts = await db("posts")
    .where({id:id})
    .update(req.body)
    .returning(['id','title','content'])
    res.json(posts);
  } catch (err) {
    console.error("Error updating posts:", err.message);
    res.status(500).json({ error: "Failed to update posts" });
  }
})

app.delete("/api/posts/:id",async(req,res)=>{
    const id = req.params.id
    try {
    const posts = await db("posts")
    .where({id:id})
    .del()
    res.json(posts);
  } catch (err) {
    console.error("Error deleting posts:", err.message);
    res.status(500).json({ error: "Failed to delete posts" });
  }
})

app.listen (5002,()=>{
    console.log("The server is running on port 5002")
})