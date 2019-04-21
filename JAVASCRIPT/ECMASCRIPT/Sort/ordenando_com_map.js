// A The funcaoDeComparacao pode ser invocada múltiplas vezes por elemento do array. Dependendo da natureza da funcaoDeComparacao, isto pode causar um excesso processamento. Quanto mais trabalho a funcaoDeComparacao fizer, e quanto mais elementos houverem para ordenar, seria mais inteligente considerar  o uso de um mapa para a ordenação. A idéia é percorrer o array uma vez para extrair os valores já processados para a ordenação e armazenar em um array temporário, ordenar o array temporário e então percorrer o array temporário para conseguir a ordenação correta.

// o array a ser ordenado
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporário que armazena os objetos com o índice e o valor para ordenação
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// ordenando o array mapeado contendo os dados resumidos
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// containerpara o resultado ordenado
var result = mapped.map(function(el){
  return list[el.index];
});