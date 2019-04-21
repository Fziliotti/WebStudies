/*
freeze is the maximum protection any object can have in JavaScript. It —

seals the object using Object.seal
It also prevents modifying any existing properties at all.
It also prevents the descriptors from being changed as the object is already sealed.

*/

const obj = {
    id: 42
};
Object.freeze(obj);
delete obj.id
// (does not work)
obj.name = 'Arfat';
// (does not work)
console.log(obj);
// // => { id: 42 }
Object.isExtensible(obj);
// // => false
Object.isSealed(obj);
// //=> true
Object.isFrozen(obj);
// => true