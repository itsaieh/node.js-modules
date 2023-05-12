/*
Name: Buffer
Description: It provides a way to handle binary data. It allows 
you to manipulate and interact with binary data directly, 
without the need for encoding or decoding.

Buffers are used to represent sequences of binary data, such as 
images, audio files, network packets, or any other form of 
raw data. They are similar to arrays of integers but 
specifically designed to work with binary data.

You can create a new Buffer object using several methods, 
such as providing an array of integers, a string, or by 
specifying the length of the buffer. 


*/

// Creating a buffer from an array of integers
const buffer1 = Buffer.from([0x41, 0x42, 0x43]);

// Creating a buffer from a string
const buffer2 = Buffer.from('Hello', 'utf8');

// Creating an empty buffer with a specific length
const buffer3 = Buffer.alloc(10);

