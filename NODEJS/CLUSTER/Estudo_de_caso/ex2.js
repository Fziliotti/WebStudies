const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    worker.send(`Hello worker ${worker.id}, I am your master!`)
    worker.on('message', (msg) => {
      console.log(`Message from worker ${worker.id}: ${msg}`);
    });
  }
} else {
  cluster.worker.on('message', (msg) => {
    console.log(`Message from master received by worker ${cluster.worker.id}: ${msg}`);
  });
  process.send(`Hello master, I am the worker ${cluster.worker.id}!`)
}