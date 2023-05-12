/*
Name: Stream module
Description: It is a built-in module that provides an 
implementation of the stream interface in Node.js. It is designed 
to handle streaming data, which allows you to read or write data 
in chunks instead of loading the entire data into memory at once.

Streams are an important concept in Node.js because they allow you
to efficiently process data that is too large to fit into memory 
or to handle data in a continuous and real-time manner.
The Stream module provides several types of streams, such as 
Readable, Writable, Duplex, and Transform, which can be used for 
different purposes.

*/

const { Readable } = require('stream');

// Create a custom readable stream
const readableStream = new Readable({
  read() {
    // Push data to the stream
    this.push('Hello ');
    this.push('World!');
    this.push(null); // Indicates end of data
  }
});

// Consume data from the readable stream
readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

// Handle the end event
readableStream.on('end', () => {
  console.log('Stream ended');
});
