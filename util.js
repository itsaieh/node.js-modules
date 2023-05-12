/*
Name: Util module
Description: It provides several utility functions that are commonly 
used in Node.js applications. It offers various useful features for 
working with objects, functions, and formatting output. 

*/

const util = require('util');

// Promisify a callback-based function
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

readFile('example.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

// Create a custom debug function
const debug = util.debuglog('myapp');
debug('This is a debug message');

// Format a string
const name = 'John';
const age = 30;
const message = util.format('Hello, my name is %s and I am %d years old.', name, age);
console.log(message);
