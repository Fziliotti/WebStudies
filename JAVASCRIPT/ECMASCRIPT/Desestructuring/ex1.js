const event = {
    id:1,
    name: 'fabricio fernandes',
    url: 'http://fziliotti.esy.es',
    date: '09/12/2018',
    location: 'Franca-SP'
}


// const id = event.id;
// const name = event.name;
// const url = event.url;
// const date = event.date;
// const location = event.location;

// FAZ A MESMA COISA, PEGA DO OBJETO E ATRIBUI

const {id, name, date, url, location} = event

console.log( `${id}`)
console.log( `${name}`)
console.log( `${url}`)
console.log( `${date}`)
console.log( `${location}`)


// GERALMENTE SERVE PARA PEGAR SO O NECESSARIO DE UM OBJETO RETORNADO POR UMA API