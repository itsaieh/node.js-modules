/*
Name: HTTP module
Description: This is a built-in module in Node.js that provides 
functionality to create HTTP servers and make HTTP requests. 
It allows you to interact with the HTTP protocol, handle incoming 
HTTP requests, and send HTTP requests to external servers.

*/


const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response status and headers
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  res.end('Hello, World!');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
