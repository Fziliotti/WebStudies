class Vetor {
  constructor(array = []) {
    this.array = array;
    this._size = array.length;
  }

  get value() {
    return this.array;
  }

  toString() {
    return this.value;
  }

  push(elem) {
    return this.value.push(elem);
  }

  map(fn) {
    let newVetor = [];
    for (let i = 0; i < this._size; i++) {
      // console.log(this.array[i]);
      newVetor.push(fn(this.value[i]));
    }
    return new Vetor(newVetor);
  }

  filter(fn) {
    let newVetor = [];
    for (let i = 0; i < this._size; i++) {
      // console.log(this.value[i]);
      if (fn(this.value[i])) newVetor.push(this.value[i]);
    }
    return new Vetor(newVetor);
  }

  reduce(func, acc = 0) {
    var accumulator = acc;
    for (let i = 0; i < this._size; i++) {
      // console.log(this.value[i]);
      let valor = this.value[i];
      accumulator = accumulator + func(valor);
    }

    return accumulator;
  }
}

// Vetor.prototype.toString = function VetorToString() {
//   return this.value;
// };

var a = new Vetor([1, 2, 3, 4, 5]);
var b = new Vetor([1, 2, 3, 4, 5]);

console.log(a.map(elem => elem * 2));
// console.log(a.map(elem => elem * 2).filter(elem => elem > 2));
console.log(
  a
    .map(elem => elem * 2)
    .filter(elem => elem > 2)
    .reduce(elem => elem * 2)
);

// console.log(
//   b
//     .map(elem => elem * 2)
//     .filter(elem => elem > 2)
//     .reduce(teste => teste)
// );
