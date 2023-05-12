/*
Name: TTY (teletypewriter) module
Description: It provides an API for working with terminal devices, 
also known as TTY (teletypewriter) devices. It allows you to 
interact with the standard input, output, and error streams, 
as well as perform operations related to terminal handling.

*/

// Check if the standard input is a TTY
if (process.stdin.isTTY) {
    console.log('Input is coming from a TTY device.');
  } else {
    console.log('Input is not coming from a TTY device.');
  }
  
  // Create a readable stream associated with TTY input
  const input = process.stdin;
  
  // Listen for data events on the input stream
  input.on('data', (data) => {
    console.log('Received input:', data.toString());
  });
  
  // Create a writable stream associated with TTY output
  const output = process.stdout;
  
  // Write a message to the output stream
  output.write('Hello, world!\n');
  
  // Enable raw mode on the input stream
  input.setRawMode(true);
  
  // Listen for keypress events on the input stream
  input.on('keypress', (key) => {
    if (key === 'q') {
      // Disable raw mode and exit when 'q' key is pressed
      input.setRawMode(false);
      process.exit();
    } else {
      console.log('Pressed key:', key);
    }
  });
  