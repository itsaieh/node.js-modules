/*
Name: Events module
Description: It is a core module in Node.js that allows you to work 
with and create custom events. It provides an implementation of the 
EventEmitter class, which serves as the foundation for event-driven 
programming in Node.js.

The EventEmitter class is an event emitter that allows you to define 
custom events and bind event handlers to them. It follows the Observer
pattern, where objects can subscribe to events and get notified when 
those events occur.

*/

const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event handler function
const myEventHandler = () => {
  console.log('Event occurred!');
};

// Bind the event handler to a custom event
myEmitter.on('myEvent', myEventHandler);

// Emit the custom event
myEmitter.emit('myEvent');
