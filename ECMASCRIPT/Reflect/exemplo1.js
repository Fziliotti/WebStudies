var $ = document.querySelector.bind(document)



// Como o close pertence ao objeto connection, isto significa que o this do close será o connection. Mas quando pegamos o método e colocamos na variável close, ele perdeu o link com o connection e ao ser chamado, não conseguirá operar. Vimos anteriormente, que temos formas de contornarmos esta limitação. Quando estivermos copiando o close no onsuccess, faremos já associado com o connection utilizando o bind
openRequest.onsuccess = e => {

    if(!connection) {
        connection = e.target.result;
        close = connection.close.bind(connection);
        connection.close = function() {
              throw new Error('Você não pode fechar diretamente a conexão');
        };
    }
    resolve(connection);
}

// OUTRA FORMA:

static closeConnection() {

    if(connection) {
        Reflect.apply(close, connection, [])
        connection = null;
    }
}