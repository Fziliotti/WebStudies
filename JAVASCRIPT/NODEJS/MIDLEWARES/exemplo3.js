var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.listen(3000);

// Ao fazer uma solicitação para a raiz do aplicativo, o aplicativo agora exibe o registro de data e hora da sua solicitação no navegador.
// Como você tem acesso ao objeto da solicitação, ao objeto de resposta, à próxima função de middleware na pilha, e à API completa do Node.js, as possibilidades com as funções de middleware são ilimitadas.
// Para obter mais informações sobre middlewares no Express, consulte: Usando middlewares no Express.