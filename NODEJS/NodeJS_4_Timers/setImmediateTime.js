var iteration = 100

while(--iteration){
	console.time('A' + iteration);
	var soma = 0
	for (let index = 0; index < 100; index++)
		 soma += index;
	console.log(soma)
	
	setImmediate(function () {
		console.timeEnd('A'+ iteration);
	});

}