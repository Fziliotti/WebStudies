var items = [{
        name: 'Edward',
        value: 21
    },
    {
        name: 'Sharpe',
        value: 37
    },
    {
        name: 'And',
        value: 45
    },
    {
        name: 'The',
        value: -12
    },
    {
        name: 'Magnetic'
    },
    {
        name: 'Zeros',
        value: 37
    }
];

console.log("Antes:")
console.log(items)

items.sort((a, b) =>{
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a must be equal to b
    return 0;
});


console.log("Depois:")
console.log(items)