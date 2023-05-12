/*
Name: child_process
Description: It provides cryptographic functionality. It allows you to 
perform various cryptographic operations, such as generating hashes, 
encrypting and decrypting data, and creating digital signatures.

*/

const crypto = require('crypto');

const data = 'Hello, World!';

// Create a hash object
const hash = crypto.createHash('sha256');

// Update the hash object with the data
hash.update(data);

// Generate the hash
const hashedData = hash.digest('hex');

console.log('Hashed Data:', hashedData);
