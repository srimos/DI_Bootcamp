const http = require('http') // default nodejs libraries

function http_request_handler(request, response) { 
    // request is from browser; response is what we'll send back
    console.log(request.url)
    if (request.url === '/') {
        response.end('<h1>Home page</h1>')
    } else if (request.url === '/about') {
        response.end('<h1>About page</h1>')
    } else {
        response.writeHead(404,{
            'Content-type': 'application/json'
        })
        response.end('{"error" : "page is not found","error_code": 404}')
    }  
}

const server = http.createServer(http_request_handler)

server.listen(5001, '0.0.0.0', () => { // 0.0.0.0 allows persons 
// from the network to connect to the server
    console.log('Server is listening at 0.0.0.0 on port 5001')
})