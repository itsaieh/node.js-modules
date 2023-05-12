/*
Name: REPL module
Description: It provides a simple interactive programming environment,
 similar to a command-line interface, where you can enter JavaScript 
 code and see the results immediately. It stands for 
 "Read-Eval-Print-Loop" because it reads your input, evaluates it, 
 prints the output, and then loops back to wait for more input.

The REPL module is automatically available when you install Node.js, 
and you can access it by running the node command in your terminal 
without any arguments.

*/

const repl = require('repl');

// Create a new REPL instance
const myRepl = repl.start('> ');

// Define custom commands or modify behavior
myRepl.defineCommand('sayhello', {
  help: 'Say hello',
  action() {
    this.clearBufferedCommand();
    console.log('Hello!');
    this.displayPrompt();
  }
});

// Handle 'exit' event
myRepl.on('exit', () => {
  console.log('Exiting REPL');
});

// Handle 'reset' event
myRepl.on('reset', (context) => {
  console.log('Resetting REPL');
  // Set custom variables or functions in the REPL context
  context.greeting = 'Welcome to the REPL!';
});

// Access custom variables or functions defined in the REPL context
myRepl.context.someVariable = 42;
myRepl.context.someFunction = () => {
  console.log('Executing custom function');
};

// Evaluate code programmatically
const result = myRepl.eval('2 + 3');
console.log('Result:', result);
