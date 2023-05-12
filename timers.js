/*
Name: Timers module
Description: It provides functions to schedule the execution of 
code after a specific amount of time or to repeatedly execute code 
at fixed intervals. It offers a set of methods that allow you to 
work with timers in your Node.js applications.

*/

// Importing the Timers module
const { setTimeout, setInterval, setImmediate, clearInterval, clearImmediate } = require('timers');

// Example using setTimeout
const timer1 = setTimeout(() => {
  console.log('This will be executed after 2 seconds.');
}, 2000);

// Example using setInterval
let counter = 1;
const timer2 = setInterval(() => {
  console.log(`This will be executed every 1 second. Count: ${counter}`);
  counter++;
}, 1000);

// Example using setImmediate
const immediate = setImmediate(() => {
  console.log('This will be executed immediately.');
});

// Cancelling the timers
clearTimeout(timer1);
clearInterval(timer2);
clearImmediate(immediate);
