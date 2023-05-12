/*
Name: Query String module
Description:  is a built-in module that provides utilities for working 
with query strings. It allows you to parse query strings, create query
strings from objects, and manipulate query strings.

*/

const querystring = require('querystring');

// Parsing a query string into an object
const queryString = 'foo=bar&baz=qux&baz=quux';
const parsedQuery = querystring.parse(queryString);
console.log(parsedQuery);
// Output: { foo: 'bar', baz: [ 'qux', 'quux' ] }

// Creating a query string from an object
const obj = { foo: 'bar', baz: ['qux', 'quux'] };
const createdQuery = querystring.stringify(obj);
console.log(createdQuery);
// Output: foo=bar&baz=qux&baz=quux

// Encoding and decoding strings
const originalString = 'hello, world!';
const encodedString = querystring.escape(originalString);
console.log(encodedString);
// Output: hello%2C%20world%21

const decodedString = querystring.unescape(encodedString);
console.log(decodedString);
// Output: hello, world!
