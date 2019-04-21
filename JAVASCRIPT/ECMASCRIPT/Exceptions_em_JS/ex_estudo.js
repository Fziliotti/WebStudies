function f() {
    try {
      console.log(0);
      throw "bogus";
      
    } catch(e) {
      console.log(1);
      return true; // essa declaração de retorno é suspensa
                   // até que o bloco finally seja concluído
      console.log(2); // não executa
    } finally {
      console.log(3);
      return false; // substitui o "return" anterior
      console.log(4); // não executa
    }
    // "return false" é executado agora 
    console.log(5); // não executa
  }


  f(); // exibe 0, 1, 3; retorna false