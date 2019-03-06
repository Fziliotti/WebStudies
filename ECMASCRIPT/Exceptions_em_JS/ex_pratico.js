function getMonthName(mo) {
    mo = mo - 1; // Ajusta o número do mês para o índice do array (1 = Jan, 12 = Dec)
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                  "Aug","Sep","Oct","Nov","Dec"];
    if (months[mo]) {
      return months[mo];
    } else {
      throw "InvalidMonthNo"; //lança uma palavra-chave aqui usada.
    }
  }
  
  try { // statements to try
    monthName = getMonthName(12); // função poderia lançar uma exceção
    console.log('rodando no try e o mes é:' + monthName)
  }
  catch (e) {
    monthName = "mesInvalido";
    console.log(e); // passa a exceção para o manipulador de erro -> sua função local.
  }
  finally {
      console.log('sempre roda isso')
  }