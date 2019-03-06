const fs = require('fs');
const server = require('http').createServer();

// basta abrir o localhost:8000 no navegador e ver a demora e consumo de memoria

// Basicamente, colocamos todo o conteúdo big.file na memória antes de escrevê-lo no objeto de resposta. Isso é muito ineficiente

server.on('request', (req, res) => {
  fs.readFile('./bigFile.txt', (err, data) => {
    if (err) throw err;
  
    res.end(data);
  });
});

server.listen(8000, function(){
    console.log('escutando na porta 8000')
});
