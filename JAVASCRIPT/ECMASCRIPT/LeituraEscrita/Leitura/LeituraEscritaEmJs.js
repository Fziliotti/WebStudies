const fs = require('fs')

var text = fs.readFileSync('texto.txt','utf8')
console.log('--------Leitura SINCRONA ----------')
console.log (text) 


// Leitura Assincrona
fs.readFile('texto.txt', (err,data) => {
    if (err) {
        console.log(err)
    }else{
        console.log('--------Leitura Assincrona1 ----------')
        console.log(data.toString())
    }
})

//  Leitura assincrona2
fs.readFile('texto.txt','utf8', (err,data) => {
    if (err) {
        console.log(err)
    }else{
        console.log('--------Leitura Assincrona2 ----------')
        console.log(data)
    }
})

