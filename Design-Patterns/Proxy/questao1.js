
// Temos o seguinte objeto literal (aquele criado com chaves):
// Crie um proxy para este objeto, exibindo no console a mensagem "Armadilha aqui",
// toda vez que a propriedade email for lida.

let funcionario = {email: 'abc@abc.com'};
let funcionarioProxy = new Proxy(funcionario,  {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        return Reflect.get(target, prop, receiver);
    }

});
console.log(funcionarioProxy.email);