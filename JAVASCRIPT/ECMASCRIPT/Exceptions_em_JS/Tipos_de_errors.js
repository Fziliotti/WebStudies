

function divisaoBinaria(a,b){
    
    try {
        if (b == 0) throw new Error('Nao pode dividir por 0 besta!')
        return a/b
    } catch (error) {
        console.log(error)
    }

}


var divisaoBinaria2 = (a,b) => a/b




console.log(divisaoBinaria(3,0))