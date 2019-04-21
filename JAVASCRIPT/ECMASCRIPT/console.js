// console.log('%c Teste', 'color:red; font-weight:600')

// console.log({foo, bar, baz}) //objetos

// console.table([foo,bar,baz])

console.time('loop')
let i=0;
while(i<100000) i++;
console.timeEnd('loop')


// const deleteMe = () => console.trace('Teste')

// deleteMe()


// SPREAD OPERATOR
// Push
pokemon = ['pikachu', 'mewto']
pokemon = [...pokemon, 'bulbasaur', 'metapod']

// unshift
pokemon = ['teste1', 'teste2', ...pokemon]

console.log(pokemon)

const pikachu = {name: 'pikachu'}

const stats = {hp:40, attack:60, defense:45}


const newObj = {...pikachu, ...stats}
