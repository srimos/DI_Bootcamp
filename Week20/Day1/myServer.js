const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("<h1>Home page on Shaun's Laptop</h1>");
  } else if (request.url === "/about") {
    response.end("<h1>About page on Shaun's Laptop</h1>");

    let i = 0;
    do {
      i++;
    } while (i < 10000000000);
  } else {
    response.end("page not found");
  }
});

server.listen(5001, "0.0.0.0", () => {
  console.log("Server is listening at localhost on port 5000");
});