/*
Name: child_process
Description: This module allows you to spawn child processes 
and interact with them from your Node.js application. 
It provides several functions and methods to create, control, 
and communicate with child processes.

*/


const { spawn } = require('child_process');

const command = process.platform === 'win32' ? 'cmd.exe' : 'echo';
const args = process.platform === 'win32' ? ['/c', 'echo', 'Hello, World!'] : ['Hello, World!'];

const childProcess = spawn(command, args);

childProcess.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

childProcess.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

childProcess.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

