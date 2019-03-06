Padrão de projeto Proxy:


em JS:
O objeto Proxy é usado para definir comportamentos 
customizados para operações fundamentais 
(por exemplo, pesquisa de propriedade, atribuição,
 enumeração, invocação de função, etc.).


TERMINOLOGIA:

handler:
Objeto marcador que contém traps.

traps:
Métodos que fornecem acesso à propriedade. Isto é análogo ao conceito de traps (armadilhas) em sistemas operacionais

target:
Objeto que o proxy virtualiza. É frequentemente utilizado como back-end de 
armazenamento para o proxy. Os invariantes (semânticas que permanecem inalterados)
em relação à não-extensibilidade do objeto ou propriedades 
não-configuráveis são verificados em relação ao target.



var p = new Proxy(target, handler);



EXEMPLO BASICO:

var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37


Geralmente você usa esse padrao para inserir um comportamento
diferenciado quando você for alterar as propriedades de um objeto.


O padrão de projeto Proxy nada mais é do que um objeto "falso",
 "mentiroso", que envolve e encapsula o objeto real que queremos 
 interagir. É como se fosse uma interface, entre o objeto real
  e o resto do código. Conseguimos assim controlar o acesso aos
   seus atributos e métodos. Nele também podemos pendurar códigos 
   que não cabem de estar alocados nos nossos modelos, mas que
    necessitam ser executados no caso de uma alteração ou atualização do mesmo.


let pessoa = {
    nome: 'Flávio'    
}

let pessoaProxy = new Proxy(pessoa, {w
    get(target, prop, receiver) {
         //...
    }
});


O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar"
com armadilhas ou qualquer código que não diga respeito ao
modelo.

O prop é a propriedade em si, que está sendo lida naquele 
momento.

O receiver é a referência ao próprio proxy. É na configuração 
do handler do Proxy que colocamos armadilhas.