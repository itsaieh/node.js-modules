/*
Name: File System module
Description: This module provides an API for interacting with the file 
system. It allows you to perform various operations on files and 
directories, such as creating, reading, updating, and deleting them.

Reading a File:

fs.readFile(path[, options], callback): Reads the contents of a file asynchronously.
fs.readFileSync(path[, options]): Reads the contents of a file synchronously.
Writing to a File:

fs.writeFile(file, data[, options], callback): Writes data to a file asynchronously, overwriting the file if it already exists.
fs.writeFileSync(file, data[, options]): Writes data to a file synchronously, overwriting the file if it already exists.
Appending to a File:

fs.appendFile(file, data[, options], callback): Appends data to a file asynchronously, creating the file if it doesn't exist.
fs.appendFileSync(file, data[, options]): Appends data to a file synchronously, creating the file if it doesn't exist.
Renaming or Moving a File:

fs.rename(oldPath, newPath, callback): Renames or moves a file asynchronously.
fs.renameSync(oldPath, newPath): Renames or moves a file synchronously.
Deleting a File:

fs.unlink(path, callback): Deletes a file asynchronously.
fs.unlinkSync(path): Deletes a file synchronously.
Checking if a File or Directory Exists:

fs.exists(path, callback): Checks if a file or directory exists asynchronously.
fs.existsSync(path): Checks if a file or directory exists synchronously.

*/

const fs = require('fs');

// Asynchronous file read
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Synchronous file read
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
