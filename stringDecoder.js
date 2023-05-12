/*
Name: String Decoder module
Description: It is a built-in module that provides a way to decode 
buffer objects into strings. It can be used when working with 
binary data or when dealing with character encodings.

*/

const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const buffers = [
  Buffer.from([0x48, 0x65, 0x6C, 0x6C, 0x6F]), // "Hello"
  Buffer.from([0x20]), // Space character
  Buffer.from([0xE2, 0x9C, 0x94]), // Heart symbol in UTF-8
  Buffer.from([0xF0, 0x9F, 0x8E, 0x89]), // Party popper symbol in UTF-8
];

let decodedString = '';

buffers.forEach(buffer => {
  decodedString += decoder.write(buffer);
});

decodedString += decoder.end();

console.log(decodedString); // Output: "Hello ❤️🎉"
