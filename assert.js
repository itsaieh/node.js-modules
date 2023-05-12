/*
Name: assert
Description: It provides a set of assertion functions for writing tests 
and performing runtime assertions. These functions are used to check if certain 
conditions are met and throw errors if the conditions are not satisfied. 
The "assert" module helps with debugging and verifying the correctness of your code.

*/

const assert = require('assert');

function add(a, b) {
  return a + b;
}

const result = add(2, 3);

assert.strictEqual(result, 5, 'Addition result should be 5');

