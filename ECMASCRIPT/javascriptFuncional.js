

let a = [1,2,3,4,5,6,7,8,9,10]
console.log(a)


let a1 = a.filter( (item) => item == 1 || item == 5)

var uniqueArray =  array.filter( ( elem, index, arr ) => arr.indexOf( elem ) === index );

// ES6
//


let a2 = a.map( (item) => item*2 )
console.log("usando o map" + a2)

var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
var celcius = fahrenheit.map(elem => Math.round((elem-32) * 5 /9))



let a3 = a.reduce((ant,atual) => ant+atual)
console.log("usando o reduce: "+ a3)


var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce( function( prevVal, elem ) {
    return prevVal + elem.launches;
}, 0 );

// ES6
var sum2 = rockets.reduce( ( prevVal, elem ) => prevVal + elem.launches, 0 ); 

