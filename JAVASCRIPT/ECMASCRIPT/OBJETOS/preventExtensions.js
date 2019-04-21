const obj = {
    id: 42
  };
  Object.preventExtensions(obj);
  obj.name = 'Arfat';
  console.log(obj);
  // => { id: 42 } 