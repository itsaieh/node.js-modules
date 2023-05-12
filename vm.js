/*
Name: VM module
Description: It is a built-in module in Node.js that provides a way 
to compile and run JavaScript code within a virtual machine context. 
It allows you to create isolated environments for executing 
JavaScript code, separate from the main Node.js process. 
The VM module is useful in scenarios where you need to run untrusted 
code or create sandboxes for executing code securely.

*/

const vm = require('vm');

// Create a new VM context
const context = vm.createContext();

// JavaScript code to be executed
const code = `
  function greet(name) {
    console.log('Hello, ' + name + '!');
  }

  greet('John');
`;

// Run the code in the VM context
vm.runInContext(code, context);
