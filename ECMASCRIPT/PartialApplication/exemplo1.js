// exemplo apenas, não entra na aplicação
const ehDivisivel = (divisor, numero) => !(numero % divisor);
ehDivisivel(2, 10); // true
ehDivisivel(2, 15); // false
ehDivisivel(2, 20); // true


// criou uma função parcial
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);
ehDivisivelPorDois(10); // true
ehDivisivelPorDois(15); // false
ehDivisivelPorDois(20); // true

// assume como parâmetros 2 e 5, nesta ordem
const fn = ehDivisivel.bind(null, 2, 5);
fn(); // false