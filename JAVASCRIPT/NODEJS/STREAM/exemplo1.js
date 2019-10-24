// Streams
// writable streams - permite que o nodejs escreva dados em uma stream
// Readable streams - permite que o nodejs leia dados de uma stream
// duplex - // ler e escrever

var fs = require('fs');

fs.createReadStream('arquivo.txt')      
  .on('finish', function(){
    console.log('arquivo lido.');
  });