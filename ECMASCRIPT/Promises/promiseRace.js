const promise1 = new Promise((resolve, reject) => 
    setTimeout(() => resolve('promise 1 resolvida'), 500));

const promise2 = new Promise((resolve, reject) => 
    setTimeout(() => resolve('promise 2 resolvida'), 1000));

// exibirá no console "promise 2 resolvida";
Promise.race([
    promise1, 
    promise2
])
.then(console.log)
.catch(console.log);



// EXEMPLO PRATICO, CRIAR UM PROMISE RACE QUE SE ALGUM DER REJECT MUITO RAPIDO, PARA A OPERACAO
export const timeoutPromise = (milliseconds, promise) => {

    const timeout =  new Promise((resolve, reject) =>
        setTimeout(() => 
            reject(`Limite da operação excedido (limite: ${milliseconds} ms)`), 
                milliseconds));

    return Promise.race([
        timeout, 
        promise
    ]);
};