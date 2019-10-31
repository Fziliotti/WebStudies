function* fibonacci(n) {
  var a = 0, b = 1, current;

  while (true) {
    current = a;

    yield current;

    a = b;
    b = current + b;
  }
}

const sequence = fibonacci(10);

for (let i = 0; i < 10; i++) {
  console.log(sequence.next().value);
}

/*
Os elementos da lista não estarão em memória quando fizermos const sequence = fibonacci(10), os mesmos serão calculados dentro do for, apenas quando forem utilizados, através de sequence.next(). Mas e se a lista precisar ter um milhão de elementos? Sem problemas, como os elementos não ficam em memória, o gerador não afetará na sua aplicação (tempo de execução continuaria alto, pois continuaria a ser executado milhões de operações, mas na memória, não seria afetado).

O retorno de um gerador é um iterador e, portanto, implementa o método next.

*/

