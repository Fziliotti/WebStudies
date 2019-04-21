const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const http = require('http');

if (cluster.isMaster) {
  console.log('Master process is running');

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from Node.js - I am the worker ${cluster.worker.id}\n`);
  }).listen(8000);

  console.log('Listening on port 8000');
}