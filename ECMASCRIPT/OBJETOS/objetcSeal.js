/*

The seal method seals an object. It means — 
It prevents new properties from being added just like Object.preventExtensions.
It marks all existing properties as non-configurable.
Values of present properties can still be changed as long as they are writable.
In short, it prevents adding and/or removing properties.
 */


const obj = {
    id: 42
};
Object.seal(obj);
delete obj.id
// (does not work)
obj.name = 'Arfat';
// (does not work)
console.log(obj);
// => { id: 42 }
Object.isExtensible(obj);
// => false
Object.isSealed(obj);
//=> true