/*
Name: cluster
Description: This allows you to create child processes (known as workers) 
in a Node.js application to take advantage of multi-core systems. 
It provides a way to scale your application's performance by utilizing 
multiple CPU cores and distributing the workload across them.

This uses a master-worker model, where the master process acts as a 
coordinator and manages the worker processes. The master process is 
responsible for creating and terminating worker processes, and it 
distributes incoming connections or tasks among the workers. 
The workers, in turn, execute the actual application logic.

*/

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running.`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died.`);
  });
} else {
  // Worker process
  console.log(`Worker process ${process.pid} started.`);

  // Create an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
  }).listen(3000);
}
