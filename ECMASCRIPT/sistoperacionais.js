const os = require('os')
console.log(os.arch());
console.log(os.cpus().length);
const freem = ((os.freemem()/1024)/1024)/1024;
const totalm = ((os.totalmem()/1024)/1024)/1024;
console.log(totalm);
console.log(freem);
console.log(os.platform());
console.log(os.release());