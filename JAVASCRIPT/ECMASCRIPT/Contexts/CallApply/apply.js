const soma = function(...args) {
    args.reduce( (current, acum) => current + acum)
}

soma(1,2,3) //6

// tem como aplicar em um array
soma.apply(null, [1,2,3,4]) //10

// ou
let a = [1,2,3,4]
soma(...a); //10