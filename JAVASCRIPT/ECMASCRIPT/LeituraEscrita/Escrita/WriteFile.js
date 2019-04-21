var fs = require('fs');

var texto = "Esse texto pode ser escrito estáticamente ou também pode ser pêgo de algum arquivo, site, ou de uma api"
fs.writeFile("escrito.txt", texto, function(err) {
    if(err) {
        throw err;
    }
    console.log("Arquivo salvo");
}); 



