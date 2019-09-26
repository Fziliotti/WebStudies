const express = require('express')

//SEPARACAO DA LOGICA DE CRIACAO DO SERVIDOR DA LOGICA DE ALOCACAO DA PORTA
class AppController {
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        //dá o poder para a aplicação entender os corpos/requisicoes enviadas para ela em formato de json
        //usado em apis RESt
        this.express.use(express.json());
    }

    routes(){
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express;