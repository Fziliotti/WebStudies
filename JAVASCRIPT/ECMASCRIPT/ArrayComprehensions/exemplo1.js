[for (i of [ 1, 2, 3 ]) i*i ]; 
// [ 1, 4, 9 ]

var abc = [ "A", "B", "C" ];
[for (letters of abc) letters.toLowerCase()];
// [ "a", "b", "c" ]


var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];
[for (year of years) if (year > 2000) year];
// [ 2006, 2010, 2014 ]
[for (year of years) if (year > 2000) if(year < 2010) year];
// [ 2006], the same as below:
[for (year of years) if (year > 2000 && year < 2010) year];
// [ 2006]


var numbers = [ 1, 2, 3 ];

numbers.map(function (i) { return i * i });
[for (i of numbers) i*i ];
// both is [ 1, 4, 9 ]

numbers.filter(function (i) { return i < 3 });
[for (i of numbers) if (i < 3) i];
// both is [ 1, 2 ]