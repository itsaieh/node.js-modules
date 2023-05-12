/*
Name: Zlib module
Description: It is a built-in module that provides compression and 
decompression functionalities for data streams using the zlib 
compression algorithm. It is commonly used for handling compression 
and decompression of files, network data, or any other type of data 
stream.

The zlib module exposes several classes and functions to perform 
compression and decompression operations.

*/

const zlib = require('zlib');
const fs = require('fs');

const inputFile = 'input.txt';
const compressedFile = 'compressed.gz';
const decompressedFile = 'decompressed.txt';

// Compress the input file
const compress = () => {
  const inputStream = fs.createReadStream(inputFile);
  const gzipStream = zlib.createGzip();
  const outputStream = fs.createWriteStream(compressedFile);

  inputStream.pipe(gzipStream).pipe(outputStream);

  outputStream.on('finish', () => {
    console.log('File compressed successfully.');
    decompress();
  });
};

// Decompress the compressed file
const decompress = () => {
  const compressedStream = fs.createReadStream(compressedFile);
  const gunzipStream = zlib.createGunzip();
  const outputStream = fs.createWriteStream(decompressedFile);

  compressedStream.pipe(gunzipStream).pipe(outputStream);

  outputStream.on('finish', () => {
    console.log('File decompressed successfully.');
  });
};

compress();
