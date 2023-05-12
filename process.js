/*
Name: Process module
Description: It provides information and control over the current 
Node.js process. It is a global object, so you can access it from 
anywhere in your Node.js application without requiring or importing 
it explicitly.

*/

// Accessing command-line arguments
console.log('Command-line arguments:', process.argv);

// Accessing environment variables
console.log('Environment variable:', process.env.HOME);

// Getting the current working directory
console.log('Current working directory:', process.cwd());

// Exiting the process
// Uncomment the following line to exit the process with an exit code
// process.exit(1);

// Handling process events
process.on('exit', (code) => {
  console.log(`Process exiting with code ${code}`);
});

// Scheduling a callback using nextTick
process.nextTick(() => {
  console.log('Callback executed using process.nextTick');
});

console.log('Node.js process ID:', process.pid);
