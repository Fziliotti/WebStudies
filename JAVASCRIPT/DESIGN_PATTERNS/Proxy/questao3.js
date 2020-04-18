

// No código acima, verificarmos se a propriedade que está sendo acessada é uma 
// função através de typeof(target[prop]) == typeof(Function)). 
// Se for, trocaremos o valor da propriedade (nosso método) por outra função, e, essa sim, 
// executa nosso código antes de o método ser executado.

let pessoa = new Proxy(new Pessoa('Barney'), {

    get(target, prop, receiver) {
        if(prop == 'grita' && typeof(target[prop]) == typeof(Function)) {
     // essa função retornada irá substituir o método 'grita' no proxy!!! Ou seja, estamos usando o handler do proxy para modificar o próprio proxy, que loucura!
            return function() {
                console.log(`Método chamado: ${prop}`);    
                // Quando usarmos Reflect.apply, Reflect.get e Reflect.set precisamos retornar o resultado da operação com return
                // arguments é uma variável implícita que dá acesso à todos os parâmetros recebidos pelo método/função
                return Reflect.apply(target[prop], target, arguments);       
            }
        }
        // só executa se não for função
        return Reflect.get(target, prop, receiver);
    }
});

pessoa.grita('Olá');

// O método estático Reflect.apply() chama uma função alvo com os argumentos especificados.
// Reflect.apply(target, thisArgument, argumentsList)

// target:
// Função que será chamada.

// thisArgument:
// O valor de "this" que será usado pela function do target.

// argumentsList:
// Um objeto do tipo array que especifica os argumentos com que o target deve ser chamado.