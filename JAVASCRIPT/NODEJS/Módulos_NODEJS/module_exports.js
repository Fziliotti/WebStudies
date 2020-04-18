//arquivo custom-express.js
var express = require('express');
var consign = require('consign');

// Precisamos que os dados venham no formato de um json.
// Porém, o Node.js em si não sabe converter os dados da
// requisição para o formato que queremos

var bodyParser = require('body-parser');

module.exports = function () {
  var app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //usando consign para incluir as routes no app
  consign()
    .include('routes')
    .into(app);

  return app;
}



//arquivo que vai usar o custom-express
var app = require('./custom-express')()

