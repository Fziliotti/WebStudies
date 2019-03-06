let dadosServidor = [
    [
        [new Date(), 1, 100],
        [new Date(), 2, 100]
    ],
    [
        [new Date(), 1, 150],
        [new Date(), 2, 300]
    ],
    [
        [new Date(), 3, 50],
        [new Date(), 1, 100]
    ]        
];



var flatMap = dadosServidor.reduce( (acum, atual) => acum.concat(atual), [])

console.log(flatMap)


// inspiração - curso Alura:
// let listaDeNegociacoes = 
//     dadosServidor
//         .reduce((novoArray, array) 
//             => novoArray.concat(array), [])
//         .map(dado
//              => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));