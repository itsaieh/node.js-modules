/*
Name: HTTPS module
Description: It provides functionality for creating secure HTTPS 
(HTTP over SSL/TLS) servers and making HTTPS requests. It is an 
extension of the core http module and offers additional features
 specific to secure communication.

*/

const https = require('https');
const fs = require('fs');

// Creating an HTTPS server
const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

const server = https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});

server.listen(443, () => {
  console.log('Server listening on port 443');
});


// Making an HTTPS request
const requestOptions = {
  hostname: 'api.example.com',
  path: '/endpoint',
  method: 'GET'
};

const req = https.request(requestOptions, (res) => {
  console.log(`Status code: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
