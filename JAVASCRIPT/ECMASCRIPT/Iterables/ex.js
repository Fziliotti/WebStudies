// Objetos iteráveis é uma generalização de matrizes. Esse é um conceito que permite tornar qualquer objeto utilizável em um for..ofloop.

// Claro, Arrays são iteráveis. Mas há muitos outros objetos internos, que também são iteráveis. Por exemplo, Strings são iteráveis ​​também. Como veremos, muitos operadores e métodos integrados dependem deles.

// Se um objeto representa uma coleção (list, set) de alguma coisa, então for..ofé uma ótima sintaxe fazer um loop sobre ele, então vamos ver como fazer isso funcionar.

// SITE: https://javascript.info/iterable



let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  

  for (let num of range){
    console.log(num); // 1, then 2, 3, 4, 5
  } 