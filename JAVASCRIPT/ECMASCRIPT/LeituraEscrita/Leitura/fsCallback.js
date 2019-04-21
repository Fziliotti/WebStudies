const fs = require('fs');


function readContent(callback) {
    fs.readFile("texto.txt", function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

readContent(function (err, content) {
    console.log("----Leitura Async cm callback------")
    console.log(content.toString())
})

