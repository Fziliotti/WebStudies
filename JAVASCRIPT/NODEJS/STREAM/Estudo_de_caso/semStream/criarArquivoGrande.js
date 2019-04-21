const fs = require('fs');
const file = fs.createWriteStream('./bigFile.txt');

for(let i=0; i<= 1e6; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}


file.end();const fs = require('fs');
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
