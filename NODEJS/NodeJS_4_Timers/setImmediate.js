console.log('A ' + new Date());

// Deferir o console.log para depois 
setImmediate(function () {
	console.log('I ' + new Date());
});
console.log('B ' + new Date());