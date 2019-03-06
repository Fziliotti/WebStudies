var hoje = new Date();

var n1 = new Negociacao(hoje, 1, 100);
var n2 = new Negociacao(hoje, 1, 100);

n1 == n2 // o resultado é false, eles comparam o ponteiro e não o conteudo


// Para comparar o conteudo de n1 e n2, bastaria fazer 
JSON.stringify(n1) == JSON.stringify(n2);
// O retorno será verdadeiro. É interessante usar o stringify() quando queremos comparar um objeto com outro, no entanto, não será útil se quisermos descobrir se as variáveis apontam para um mesmo objeto. Nós serializamos o objeto, transformando-o em uma string.


var x = 10;
var y = 10;

x == y // o resultado é true

// Ele dirá que x e y são igual. Por que isto ocorreu? Quando usamos o == com tipos literais (ou tipos primitivos, em Java), como string, number e boolean, ele não verificará se as variáveis apontam para o mesmo objeto da memória, ele compara se os valores são iguais. Então, nos casos acima, não há problemas... Mas o mesmo não acontecerá com outros tipos de objeto, por exemplo, um date. Nós temos dois objetos de memória:





