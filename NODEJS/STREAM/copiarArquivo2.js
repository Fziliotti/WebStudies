// ler de um arquivo e escrever conteudo em outro:

var fs = require('fs');

/*
O ideal seria que fosse criado um pipeline de execuções.
Para implementar tal necessidade, a api de streams tem a função pipe(). A função dela é exatamente a de criar um novo canal para que um novo fluxo possa ser criado e passe a executar ações concorrentemente à que já estava sendo executada e, possivelmente trabalhando sobre o mesmo conjunto de dados:
*/
fs.createReadStream('readMe2.txt')
  .pipe(fs.createWriteStream('writeMe2.txt'))
  .on('finish', function(){
    console.log('arquivo escrito.');
  });