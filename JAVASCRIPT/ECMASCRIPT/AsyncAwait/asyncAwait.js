const minhaPromise = () => new Promise( (res,rej) => {
    setTimeout( () => { res('OK')}, 2000)
})

// FORMA ANTIGA
minhaPromise()
.then( res => {
    console.log(res)    
    minhaPromise().then( res => {
        console.log(res)

        minhaPromise().then( res => {
            console.log(res)
        })
    })
})


// COM ASYNC
async function ExecutaPromise() {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

// ExecutaPromise()