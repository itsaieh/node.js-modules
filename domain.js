/*
Name: Domain module
Description: It was a deprecated module that provided a way to handle 
uncaught exceptions in a domain-specific manner. However, as of 
Node.js version 15.0.0, the domain module has been officially 
deprecated and is no longer recommended for use.

The domain module allowed you to create a domain, which was essentially 
a context where you could group related I/O operations and handle 
errors occurring within that context. You could also bind event 
emitters and callbacks to a domain, so that any errors thrown within 
those event emitters or callbacks would be automatically caught and 
handled by the domain.

*/

const domain = require('domain');

const myDomain = domain.create();

myDomain.on('error', (err) => {
  console.log('Caught error: ', err);
});

myDomain.run(() => {
  // Code within this block is now within the domain

  // Perform some asynchronous operation
  setTimeout(() => {
    // This error will be caught by the domain's error handler
    throw new Error('Something went wrong');
  }, 1000);
});
