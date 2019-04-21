class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {

        return `${this.nome} ${this.sobrenome}`;
    }
}

let pessoa1 = new Pessoa('Flávio', 'Almeida');
pessoa1.obterNomeCompleto();

let pessoa2 = new Pessoa('Almeida', 'Flávio');
pessoa2.obterNomeCompleto();


// Contudo, em determinada parte do seu código, ele viu a necessidade de que o método obterNomeCompleto retornasse o nome e o complemento separados por um hífen. Ele lembrou das aulas de Proxy, mas achou que naquela situação teria muito trabalho em implementar algo como nosso ProxyFactory.

// Ele lembrou que seu amigo Hugo costumava resolver esse problema através de monkey patch, que consiste em mudar o método ou função dinamicamente. Ele tem interesse em mudar o método de uma instância e não de todas.


let pessoa2 = new Pessoa('Almeida', 'Flávio');

pessoa2.obterNomeCompleto = function() {

  return `${this.nome} - ${this.sobrenome}`;
}
console.log(pessoa2.obterNomeCompleto());


// Estamos modificando dinamicamente obterNomeCompleto apenas na instância pessoa2. Veja que usamos function e não arrow function. Foi necessário usar function devido ao seu escopo dinâmico, isto é, this deve variar de acordo com a instância no qual obterNomeCompleto é chamado. Se usarmos arrow function, seu escopo léxico fará com que o this seja sempre do contexto no qual a função é declarada, no caso window, o escopo global.

// Inclusive é possível alterar a definição do método diretamente na própria classe, dessa maneira, todas as instâncias de Pessoa, criadas antes ou depois da modificação, automaticamente "herdarão" a modificação:

Pessoa.prototype.obterNomeCompleto = function() {

  return `${this.nome} - ${this.sobrenome}`;
}

// O monkey patch deve ser usado com parcimônia, até mesmo como último recurso, quando propõe uma modificação direta na definição da classe. Isto porque modificações usadas globalmente podem ocasionar bugs em diversas partes do nosso código, tendo assim, um resultado imprevisível.
