const text = ' Alura Cursos ';
const words = text.trim()
  .toUpperCase()
  .split(' ');

console.log(words); // ['ALURA', 'CURSOS']


// Podemos reescrever o código anterior de uma
// maneira que lembre a aplicação de funções matemáticas. 

const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);

const words = split(' ')(toUpperCase(trim(' Alura Cursos ')));

console.log(words);