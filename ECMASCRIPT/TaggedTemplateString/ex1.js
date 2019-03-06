
const name = 'Snickers';
const age = '100';
const sentence = highlight`My dog's name is ${name}and he is ${age} years old`;

const sentence2 = highlight`
'My cat's name is' 'Beatriz'
${name}
${age}
`

function highlight(strings, name = required(), age = required()) {
    return `${strings}, ${name}, ${age}`;
}


function required(){
    throw Error('Atributo não foi informado.');
}

console.log(sentence)
console.log(sentence2)