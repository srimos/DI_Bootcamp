const express = require('express')
const app = express()
const posts = require("./posts.js");

app.use(express.json());

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

app.get('/', (req, res) => {
    res.send("Welcome to blog-api!")
});

app.get('/api/posts', (req, res) => {
    res.json(posts)
});

app.get('/api/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id == id);
    if (!post) {
    return res.status(404).send("Post not found");
    }
    res.json(post);
});

app.post('/api/posts', (req, res) => {
    const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.findIndex((post) => post.id == id);
    if (post == -1) {
    return res.status(404).send("Product not found");
    }
    const updatedPost = {
        id: posts[post].id,
        title: req.body.title,
        content: req.body.content,
    };
    posts[post] = updatedPost;
    res.status(200).json("Post updated");
});

app.delete("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.findIndex((post) => post.id === id);
  if (post == -1) {
    return res.status(404).send("Product not found");
  }
  posts.splice(post, 1);
  res.status(200).json("Post deleted");
});

