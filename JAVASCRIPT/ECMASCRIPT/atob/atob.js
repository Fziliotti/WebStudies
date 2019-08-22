const atob = str => Buffer.from(str, 'base64').toString('binary');

// console.log(Buffer.from('foobar', 'base64').toString('binary'))
console.log(atob('Zm9vYmFy')); // 'foobar'

// Decodifica uma string de dados que foi codificada usando a codificação base-64. 
// Crie um Buffer para a string dada com a codificação base-64 e 
// use Buffer.toString ('binary') para retornar a string decodificada.