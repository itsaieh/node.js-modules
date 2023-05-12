/*
Name: TLS module
Description: It provides an implementation of the TLS and SSL 
protocols for secure communication over the network. 
It allows you to create secure client and server connections using 
cryptographic protocols and provides encryption, authentication, 
and integrity for your network communications.

*/

const tls = require('tls');
const fs = require('fs');

// Create options for the server
const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
};

// Create the server
const server = tls.createServer(options, (socket) => {
  console.log('Client connected');

  // Send a welcome message to the client
  socket.write('Welcome to the secure server!\n');

  // Handle data received from the client
  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
  });

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
