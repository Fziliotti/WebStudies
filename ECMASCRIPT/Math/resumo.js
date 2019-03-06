//Math: biblioteca nativa para matematica
var num = 43.744453;

console.log(num);
console.log(Math.floor(num)); //Arredonda pra baixo
console.log(Math.ceil(num));  //Arredonda pra cima
console.log(Math.round(num)); //Arredonda pro mais próximo
//CUIDADO! As funções a cima são feitas em codigo, se você usa o operador não binário (~) a sua CPU que vai converter mas retornar o numero negado, logo basta negar ele duas vezes ~~ para arredondar pra baixo
console.log(~~num);     //Arredonda pra baixo de forma mais eficiente que o Math.floor
console.log(~~num + 1); //Arredonda pra cima de forma mais eficiente que o Math.ceil

//Constantes
console.log(Math.PI);

//Potencia
console.log(Math.pow(2, 3));
//MUITO MUITO CUIDADO!!! A função Math.pow é a função mais lenta da biblioteca Math, em torno de 10 vezes mais lenta que extrair a raiz quadrada, para potencias inteiras, use a função que mostro no final do arquivo
console.log(Math.sqrt(2));

//Maior e menor
console.log(Math.max(3, 2));
console.log(Math.min(3, 2));

//Aleatorio
console.log(Math.random());
console.log(~~(Math.random()*5 + 2));

//Verificar se uma string pode virar numero
console.log(isNaN("2.4"));
console.log(isNaN("1e10"));
console.log(isNaN("batata"));
//Transforma a string em numero
console.log(Number("2.4") + Number("1e2"));

//Funções uteis:
function intPow(n, k) { //Potencias inteiras com boa performance
	var out = n;
	while(--k) out *= n;

	return out;
}
console.log(intPow(2, 3));

function intRandom(a, b) { //Numero aleatorio entre outros dois
	return ~~(Math.random() * (1 + Math.max(a, b) - Math.min(a,b)) + Math.min(a, b));
}
console.log(intRandom(5, 10));