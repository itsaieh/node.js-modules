/*
Name: URL module
Description: It provides utilities for working with 
URLs (Uniform Resource Locators). It allows you to parse URLs, 
construct new URLs, and manipulate different components of a URL 
such as the protocol, hostname, path, query parameters, etc. 
The URL module is included in the Node.js core library, so you can 
use it without installing any additional packages.

*/

const url = require('url');

// Parsing a URL
const urlString = 'https://www.example.com/foo/bar?name=John&age=25';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl.protocol);   // Output: 'https:'
console.log(parsedUrl.hostname);   // Output: 'www.example.com'
console.log(parsedUrl.pathname);   // Output: '/foo/bar'
console.log(parsedUrl.query);      // Output: { name: 'John', age: '25' }

// Formatting a URL
const urlObject = {
  protocol: 'https',
  hostname: 'www.example.com',
  pathname: '/foo/bar',
  query: { name: 'John', age: '25' }
};
const formattedUrl = url.format(urlObject);

console.log(formattedUrl);  // Output: 'https://www.example.com/foo/bar?name=John&age=25'

// Resolving a relative URL
const fromUrl = 'https://www.example.com/foo/';
const toUrl = '../bar';
const resolvedUrl = url.resolve(fromUrl, toUrl);

console.log(resolvedUrl);  // Output: 'https://www.example.com/bar'

// Working with URL search params
const searchParams = new url.URLSearchParams('name=John&age=25');

console.log(searchParams.get('name'));        // Output: 'John'
console.log(searchParams.get('age'));         // Output: '25'

searchParams.set('name', 'Alice');
searchParams.append('city', 'London');

console.log(searchParams.toString());         // Output: 'name=Alice&age=25&city=London'
