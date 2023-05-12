/*
Name: punycode module
Description: is a way to represent Unicode characters in ASCII for use 
in Internationalized Domain Names (IDNs). The Punycode module in 
Node.js provides functions to convert between Punycode and Unicode.

*/

const punycode = require('punycode');

// Encode a Unicode string to Punycode
const encoded = punycode.encode('résumé');
console.log(encoded); // output: 'rsum-3la'

// Decode a Punycode string to Unicode
const decoded = punycode.decode('rsum-3la');
console.log(decoded); // output: 'résumé'

// Convert Punycode domain to Unicode
const unicodeDomain = punycode.toUnicode('xn--rsum-3la');
console.log(unicodeDomain); // output: 'résumé'

// Convert Unicode domain to Punycode
const punycodeDomain = punycode.toASCII('résumé');
console.log(punycodeDomain); // output: 'xn--rsum-3la'
