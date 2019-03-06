const obj = {
    teste: 'fabricio'
};

console.log(obj);
delete obj.teste;
console.log("teste deletado: "+obj);

Object.defineProperty(obj, 'id', {
  value: 42
});



// => { }

console.log(obj.id);
// => 42

Object.defineProperty(obj, 'name', {
  value: 'Arfat',
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(obj.name);
// => 'Arfat' 

obj.name = 'Arfat Salman'

console.log(obj.name);
// => 'Arfat' because   writable: false
// (instead of 'Arfat Salman')

Object.defineProperty(obj, 'lastName', {
  value: 'Salman',
  enumerable: false,
});

console.log(Object.keys(obj));
// => [ 'name' ] not ['name','lastName'] because enumerable: false!
delete obj.id;

console.log(obj.id);
// => 42

Object.defineProperties(obj, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(obj.property1)
// => 42