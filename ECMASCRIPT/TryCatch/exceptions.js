try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e) {
    if (e instanceof TypeError) {
        // declarações para manipular exceções TypeError
    } else if (e instanceof RangeError) {
        // declarações para manipular exceções RangeError
    } else if (e instanceof EvalError) {
        // declarações para manipular exceções EvalError
    } else {
       // declarações para manipular quaisquer exceções não especificadas
       logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
    }
}

// A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch
//  porém antes das declarações seguintes a declaração try. Ela sempre é executada, 
//  independente se uma exceção for lançada ou capturada.

openMyFile()
try {
   // vincula o recurso
   writeMyFile(theData);
}
finally {
   closeMyFile(); // sempre fecha o recurso
}