// écnica de uma forma muito simples, usando a combinação 
// de default parameters com uma simples função utilitária
// que será usada para lançar um erro.

function required() {
    throw new Error('Atributo não foi informado.');
  }

  const soma = (a = required(), b = required()) => a + b;
  
  
  console.log(soma(1, 2)); // 3
 // Uncaught Error: Atributo não foi informado.