import express from "express"
const app = express()
import {fetchPosts} from "./data/dataServices.js"

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

async function dataFetch() {
    const data = await fetchPosts()
    console.log(data)
    console.log("Data has been successfully retrieved") 
}

dataFetch()