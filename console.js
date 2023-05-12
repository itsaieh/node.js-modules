/*
Name: console module
Description: It provides a simple debugging console that is similar 
to the console mechanism provided by web browsers. It allows 
developers to print information to the console, as well as to read 
input from the console.

*/

const console = require('console');

console.log('This is a regular log message.');
console.error('This is an error message.');

console.warn('This is a warning message.');

const obj = {
  name: 'John',
  age: 30
};

console.dir(obj);

console.time('Timer');
// Simulating a long-running operation
for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}
console.timeEnd('Timer');

console.trace('This is a trace message.');

// Creating a custom console instance
const customConsole = new console.Console(process.stdout, process.stderr);

customConsole.log('Custom console instance log message.');

