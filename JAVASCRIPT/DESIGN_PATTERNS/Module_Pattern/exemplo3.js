var formatadorDeMoedas = (function() {

    let simboloMoeda = 'R$ ';
    let modulo = {};

    modulo.numeroParaReal = numero => {

        return simboloMoeda + numero.toFixed(2).replace('.', ',');
    }

    modulo.realParaNumero = texto => {

        return texto.replace(simboloMoeda, '').replace(',', '.');
    }

    return modulo;
})();

// exemplo de uso

let real = 'R$ 100,20';
let realConvertidoEmNumero =
     formatadorDeMoedas.realParaNumero(real);

alert(realConvertidoEmNumero);

let numero = 200.15;
let numeroConvertidoEmReal = 
    formatadorDeMoedas.numeroParaReal(numero);

alert(numeroConvertidoEmReal);

/*
Como uma IIFE nada mais é do que uma função, toda função pode retornar algo. Nesse caso, precisamos retornar as duas funções de conversão, mas sabemos que só podemos ter um retorno. É por isso que criamos o objeto modulo e nele adicionamos dinamicamente duas propriedades com os nomes das funções que havíamos criado, e em seguida definimos o comportamento dessas propriedades através de uma função, no caso, arrow functions por serem mais sucintas.

Perceba que simboloMoeda não está presente em nenhuma propriedade de modulo. Isso faz sentido, porque nossa função retornará o objeto modulo com as funções, mas não será exportado com simboloMoeda. No final da nossa IIFE, retornamos (exportamos) o objeto modulo. O retorno da IIFE é armazenada na variável formatadorDeMoedas, essa sim no escopo global e acessível em qualquer lugar da nossa aplicação.

Se tentarmos sobrescrever simboloMoeda, não conseguiremos. Mas Flávio, eu posso sobrescrever a variável formatadorDeMoedas que está no escopo global, certo? Sim, mas veja que agora temos apenas uma variável no escopo global e não três como tínhamos antes, que era a variável que guarda o símbolo da moeda e as funções.

Quando o método formatadorMoeda.numeroParaReal for chamado, ele se lembrará do contexto no qual foi declarado (ou seja, o escopo da IIFE) e terá acesso à variável simboloMoeda.

Esse pattern é muito usado no ES5 para resolver problemas desse tipo, entre outros. No entanto, o ES6 possui um sistema de módulos nativos. Curioso para ver como ele funciona? Isso ficará para o quarto módulo do curso avançado, pois migrar para o sistema de módulos do ES6 exige outros conhecimentos, sem falar que será uma mudança trabalhosa. Fique antenado para os próximos módulos, pois um assunto quente como esse será apresentado, aguarde!
*/