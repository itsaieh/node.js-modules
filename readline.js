/*
Name: Readline module
Description: It provides an interface for reading data from a Readable 
stream (such as process.stdin) line by line. It is commonly used for
 building command-line interfaces or for reading and processing files 
 line by line.

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});

rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close();
  } else {
    console.log(`Received: ${input}`);
  }
});
