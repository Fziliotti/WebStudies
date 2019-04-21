

// ESSA CLASSE NEGOCIACAO DEVE SER IMUTAVEL, SEUS ATRIBUTOS NAO PODEM SER MODIFICADOS 
class Negociacao {
    constructor(data,quantidade,valor){
        // o underline serve para mostrar que o atributo é privado, nao deve ser modificado a nao ser pelos metodos set
        this._data = new Date(data.getTime()); 
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // faz um congelamento superficial, conseguimos alterar a data que é um objeto 
    }

    getVolume(){
        return this._quantidade * this._valor;
    }

    //usando esse get, irei poder acessar o atributo so com ponto
    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        //Programacao defensiva nesse caso será NÃO RETORNAR a referencia pra data
        return Date(this._data.getTime())
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

}


const n1 = new Negociacao( new Date, 10, 500)

console.log(n1.data)
console.log(n1.valor)
console.log(n1.quantidade)
console.log("volume eh: " + n1.volume)
