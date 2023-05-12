/*
Name: Datagram module
Description: This is part of the core API and allows you to work with 
UDP (User Datagram Protocol) sockets. UDP is a lightweight, 
connectionless protocol that operates at the transport layer of the 
Internet Protocol Suite. It provides a simple and fast way to send and 
receive datagrams over a network.

*/

const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

const port = 1234;
const address = '0.0.0.0';

socket.on('listening', () => {
  const addressInfo = socket.address();
  console.log(`Socket is listening on ${addressInfo.address}:${addressInfo.port}`);
});

socket.on('message', (message, remoteInfo) => {
  console.log(`Received message from ${remoteInfo.address}:${remoteInfo.port}: ${message}`);
});

socket.bind(port, address);

const message = Buffer.from('Hello, server!');
const remotePort = 5678;
const remoteAddress = '192.168.0.100';

socket.send(message, remotePort, remoteAddress, (error) => {
  if (error) {
    console.error('Error sending message:', error);
  } else {
    console.log('Message sent successfully!');
  }

  socket.close();
});
