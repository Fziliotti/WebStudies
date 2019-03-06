// COMPOSE
const sumItems = compose(
    sumItemsValue, 
    partialize(filterItemsByCode, code), 
    getItemsFromNotas
);

//compose
export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value);


// PIPE
const sumItems = pipe(
    getItemsFromNotas,
    partialize(filterItemsByCode, '2143'), 
    sumItemsValue, 
);

// pipe
export const pipe = (...fns) => value => 
  fns.reduce((previousValue, fn) => 
      fn(previousValue), value);