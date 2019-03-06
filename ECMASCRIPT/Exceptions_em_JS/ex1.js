// RESUMÃO
// A declaração try...catch é composta por um bloco try, 
// que contém uma ou mais declarações, e zero ou mais blocos catch,
// contendo declarações que especificam o que fazer se uma exceção 
// é lançada no bloco try. Ou seja, você deseja que o bloco try  
// tenha sucesso, e se ele não tiver êxito, você quer o controle passado
// para o bloco catch. Se qualquer declaração do bloco try 
// (ou em uma função chamada dentro do bloco try) lança uma exceção,
// o controle é imediatamente mudado para o bloco catch. Se nenhuma exceção
// é lançada no bloco try, o bloco catch é ignorado. O bloco finally executa
// após os blocos try e catch executarem, mas antes das declarações seguinte
// ao bloco try...catch.


// Você pode lançar qualquer expressão, 
// não apenas expressões de um tipo específico. 
// O código a seguir lança várias exceções de diferentes tipos:

throw "Error2";   // tipo string
throw 42;         // tipo numérico
throw true;       // tipo booleano
throw {toString: function() { return "Eu sou um objeto!"; } };

// Cria um objeto do tipo UserException
function UserException(mensagem) {
    this.mensagem = mensagem;
    this.nome = "UserException";
  }
  
  // Realiza a conversão da exceção para uma string adequada quando usada como uma string.
  // (ex. pelo console de erro)
  UserException.prototype.toString = function() {
    return this.name + ': "' + this.message + '"';
  }
  
  // Cria uma instância de um tipo de objeto e lança ela
  throw new UserException("Valor muito alto");