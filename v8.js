/*
Name: v8 module
Description: Node.js version 8 is relatively old, and its latest 
release was version 8.17.0. In Node.js version 8, modules were 
supported using the CommonJS module system, which is based on the 
require and module.exports syntax.

To create a module in Node.js version 8, you would typically create a 
JavaScript file that exports certain values or functions using the 
module.exports object.

*/

// math.js
const add = (a, b) => {
    return a + b;
  };
  
  const subtract = (a, b) => {
    return a - b;
  };
  
  module.exports = {
    add,
    subtract
  };
  
  // index.js
const math = require('./math.js');

console.log(math.add(5, 3));       // Output: 8
console.log(math.subtract(10, 4)); // Output: 6
