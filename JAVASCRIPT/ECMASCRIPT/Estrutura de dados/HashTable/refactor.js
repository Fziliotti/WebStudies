class HashTable {

  constructor(sizeLimit = 31){
    this._storage = [];
    this._sizeLimit = sizeLimit
  }

  print(){
    console.log(this._storage)
  }

  add(key, value) {
    var index = this._hash(key, this._sizeLimit);
    if (this._storage[index] === undefined) {
      this._storage[index] = [[key, value]];

    } else {
      var inserted = false;

      for (var i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === key) {
          this._storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) 
        this._storage[index].push([key, value]);
      
    }
  };

  remove(key) {
    var index = this._hash(key, this._sizeLimit);
    if (this._storage[index].length === 1 && this._storage[index][0][0] === key) {
      delete this._storage[index];
    } else {
      for (var i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === key) {
          delete this._storage[index][i];
        }
      }
    }
  };

  lookup(key) {
    var index = this._hash(key, this._sizeLimit);
    if (this._storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === key) {
          return this._storage[index][i][1];
        }
      }
    }
  };

  _hash (string, max){
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
}

let ht = new HashTable(71);
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('fabricio', 'euaquii');
ht.add('Murilo', 'asdasdasdsa');
// console.log(ht.lookup('tux'))
ht.print();