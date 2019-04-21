// temos a seguinte chamada de função stoppableInterval:

const stop = stoppableInterval(() => 
  console.log('Yo!'), 1000);
stop();
// A função stoppableInterval recebe dois parâmetros.
// O primeiro é a função que desejamos invocar de 
// tempo em tempo, já a segunda é o intervalo entre as chamadas da função.
// O retorno de stoppableInterval é uma função que ao ser chamada parará
// o setInterval utilizado por debaixo dos panos.

// Marque a opção que implementa a função stoppableInterval em acordo com a API descrita acima:

const stoppableInterval = (fn, milisseconds) => {
    const timer = setInterval(fn, milisseconds);
    return () => {
        clearTimeout(timer);
    }
}