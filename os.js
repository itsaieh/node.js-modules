/*
Name: OS module
Description: It is a built-in module that provides a set of operating 
system-related utility methods and properties. It allows you to 
interact with the underlying operating system in various ways.

*/

const os = require('os');

// Retrieving Operating System Information
console.log('Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('Operating System:', os.type());
console.log('Release Version:', os.release());

// Retrieving System Uptime
console.log('Uptime:', os.uptime(), 'seconds');

// Retrieving CPU Information
console.log('CPU Information:');
console.log(os.cpus());
console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');

// Retrieving Network Interfaces
console.log('Network Interfaces:');
console.log(os.networkInterfaces());

// Working with Paths
console.log('Home Directory:', os.homedir());
console.log('Temporary Directory:', os.tmpdir());

// Performing System-Level Operations
console.log('Hostname:', os.hostname());
console.log('User Information:');
console.log(os.userInfo());
