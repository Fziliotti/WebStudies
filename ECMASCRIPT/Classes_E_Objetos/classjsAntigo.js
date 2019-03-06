

  function Animal (nome) {
    this.nome = nome;
  }
  
  Animal.prototype.falar = function() {
     console.log(this.nome + ' faça barulho.');
  }
  Animal.prototype.imprimir = function () {
      console.log(this.nome)
  }
  
  class Cachorro extends Animal { 
    falar() {
      console.log(this.nome + ' emite um barulho.');
    }
  }
  
  var d = new Cachorro('Mitzie');
  d.falar(); // Mitzie barks

  d.imprimir();