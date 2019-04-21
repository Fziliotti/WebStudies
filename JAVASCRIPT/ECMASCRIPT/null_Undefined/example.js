var x;
if (x === undefined) {
  console.log('Entrou na comparação direta com undefined')
}
else {
  // these statements do not execute
}

// x has not been declared before
if (typeof x === 'undefined') { // evaluates to true without errors
  console.log('Entrou no typeof')
}

// OU
if (x === void 0) {
  console.log('Entrou no void')
}

// OBS: Se mudar pra const nao dá certo