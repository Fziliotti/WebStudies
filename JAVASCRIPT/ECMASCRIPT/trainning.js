class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    get Nome() {
        return this.nome;
    }

}


/* prototype permite que cria funcoes da classe em tempo de execucao */
Pessoa.prototype.imprimir = function () {
    console.log("A pessoa tem o nome de :" + this.nome);
}


a = new Pessoa("Fabricio")
a.setNome("Fabriciao")
console.log(a.Nome)



let x = [
    { name: "fabricio" },
    { name: "Murilo" },
    { name: "Felipe" }
]


x.forEach(
    (a) =>
        (a.name == "fabricio") ? console.log('OBJETO BONITAO DO ARRAY x: ' + a.name)
            : console.log('OBJETO DO ARRAY x: ' + a.name)
)

// x.forEach(
//     (a)=> {
//         if(a.name != "fabricio")console.log('OBJETO NAO TAO BONITO DO ARRAY x: ' + a.name)
//         console.log('OBJETO DO ARRAY x: ' + a.name)
//     }
// )




x.map(index => console.log(index.name))