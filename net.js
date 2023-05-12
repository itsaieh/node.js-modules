/*
Name: Net module
Description: It is a core module in Node.js that provides functionality 
for creating TCP servers and clients. It allows you to build network 
applications that communicate using the TCP protocol.

*/


// TCP server
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');
  
    socket.on('data', (data) => {
      console.log(`Received data from client: ${data}`);
      socket.write(`Server received: ${data}`);
    });
  
    socket.on('end', () => {
      console.log('Client disconnected');
    });
  });
  
  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  



  // TCP Client
  const client = net.connect(3000, 'localhost', () => {
    console.log('Connected to server');
  
    client.write('Hello, server!');
  });
  
  client.on('data', (data) => {
    console.log(`Received data from server: ${data}`);
  });
  
  client.on('end', () => {
    console.log('Disconnected from server');
  });
  