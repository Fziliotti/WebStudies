const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res) => {
    const src = fs.createReadStream('./bigFile.txt');
    src.pipe(res);
  });


server.listen(8000, function(){
    console.log('escutando na porta 8000')
});
