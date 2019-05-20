const funcao = (item, saida) => {
  let teste = 5;
  teste = teste * item;
  return saida(teste);
};

const funcAuxiliar = valor => valor * 2;

console.log(funcao(2, funcAuxiliar));

// PELO CLEAN CODE, FUNCOES NAO PODEM TER SAIDAS PELO PARAMETRO, PORQUE É CONFUSO

function executaDe1a3(funcao) {
  funcao(1);
  funcao(2);
  funcao(3);
}

executaDe1a3(x => console.log("Dou-lhe " + x));

function funcaoDeCb(valor, error) {
  try {
    return valor * 0;
  } catch (err) {
    return error(err);
  }
}

console.log(funcaoDeCb(3, console.log()));
