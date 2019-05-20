class Humano {
  constructor(nome) {
    this.nome = nome;
  }
  andar() {
    return this.nome + " andou um passo";
  }
}

const HumanoFalante = function(ClasseHerdada) {
  return class extends ClasseHerdada {
    falar() {
      return this.nome + " diz: olá mundo!";
    }
  };
};

const HumanoFalanteMixado = ClasseHerdada => class extends ClasseHerdada {};

const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano));

const humano = new HumanoFinal("Bill Gates");

console.log(humano.andar());
console.log(humano.falar());
