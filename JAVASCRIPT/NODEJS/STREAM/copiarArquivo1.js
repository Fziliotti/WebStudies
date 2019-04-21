var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+ '/writeMe1.txt');


myReadStream.on('data', function(chunk){
    console.log('New Chunk received!');
    myWriteStream.write(chunk);

});