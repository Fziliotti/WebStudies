// IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

// É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais.
// A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses.
// Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.

(function () { 
    var nome = "Felipe";
})();
// A variável nome não é acessível fora do escopo da expressão 
nome // gerará o erro "Uncaught ReferenceError: nome is not defined"


var result = (function () { 
    var nome = "Felipe"; 
    return nome; 
})(); 
// Imediatamente gera a saída: 
result; // "Felipe"



(function (message){
    alert(message);
  }
)('Let's go!')

// alerta 'Let's go!'

// É interessante observar que deixar essas variáveis em escopos fechados não tem vantagens apenas na segurança dos dados. Se menos variáveis são criadas no escopo global, reduzimos o ruído e a chance de conflito entre seus nomes.