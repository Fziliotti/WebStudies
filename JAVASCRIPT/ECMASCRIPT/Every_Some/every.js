var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function (currentValue) {
  return currentValue < 10;
});
// Returns false todos os valores devem satisfazer a condicao
