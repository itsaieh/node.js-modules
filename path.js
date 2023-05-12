/*
Name: path module
Description: It provides utilities for working with file paths and 
directory paths in a cross-platform manner. It is part of the 
Node.js core API, so you can use it without installing any additional 
packages.

*/

const path = require('path');

const filePath = '/path/to/file.txt';

// Get the filename
const filename = path.basename(filePath);
console.log('Filename:', filename);

// Get the directory name
const directory = path.dirname(filePath);
console.log('Directory:', directory);

// Get the file extension
const extension = path.extname(filePath);
console.log('Extension:', extension);

// Join multiple path segments
const fullPath = path.join('/home', 'user', 'documents', 'file.txt');
console.log('Full Path:', fullPath);

// Resolve a relative path to an absolute path
const absolutePath = path.resolve('path/to/file.txt');
console.log('Absolute Path:', absolutePath);
