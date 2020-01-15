(function () {

// Nós estamos criando uma função autoinvocada. Simultaneamente, ela será carregada e executada. Estamos enganando o compilador do JavaScript, porque o conteúdo do parênteses é uma função anônima... Em seguida, criaremos a variável ConnectionFactory no escopo global, mas o restante do código não estará.

var ConnectionFactory = (function () {

    //partes nao visualizadas no escopo global
    var stores = ['negociacoes'];
    var version = 4;
    var dbName = 'aluraframe';

    var connection = null;

    return class ConnectionFactory {

        constructor() {

              throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }

//...


// Aplicamos o Module Pattern, com o qual transformamos todo o script em um módulo - o código está todo confinado. E depois, definimos qual parte queremos exportar para o mundo externo usando o return. A ConnectionFactory é acessada, mas todo o restante não. Com isto, resolvemos o problema de utilizarmos uma única conexão.