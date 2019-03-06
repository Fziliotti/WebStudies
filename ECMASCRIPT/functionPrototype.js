
  class Person2 {
      constructor(name,age){
          this.name = name
          this.age = age
      }

       setName(newAge){
           return this.age = newAge
       } 

       get Name(){
           return this.name
       }
  }

  const fab = new Person2('fabricio', 20)
  fab.setName('Fabriciao')
  console.log(fab.Name)


  class Ponto {
      constructor(x,y){
          this.x = x
          this.y = y
      }
      static distancia(a,b){
          const dx = a.x - b.x
          const dy = a.y - b.y
          return Math.sqrt(dx*dx + dy*dy)
      }
  }

  const p1 = new Ponto(5,5)
  const p2 = new Ponto(10,10)


  console.log(Ponto.distancia(p1,p2));


  class Animal { 
    constructor(nome) {
      this.nome = nome;
    }
    falar() {
      console.log(this.nome + ' emite um barulho.');
    }
  }

  class Cachorro extends Animal {
      constructor(nome, idade){
          super(nome);
          this.idade = idade;
      }
      brincar(){
          console.log("estou brincando!");
      }
        falar() {
        console.log(this.nome + ' latidos.');
        }
  }

  var d = new Cachorro('Mat',50);
  console.log(d.nome)
 

  