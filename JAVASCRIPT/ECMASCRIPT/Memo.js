function fib(n) {
	if(n < 2)
		return n;
	return fib(n - 1) + fib(n - 2);
}

function _fibMemo(n, memo) {
	if(memo.has(n))
		return memo.get(n);
	
	if(n < 2)
		return n;
	let v = _fibMemo(n - 1, memo) + _fibMemo(n - 2, memo);
	memo.set(n, v);
	return v;
}

function fibMemo(n) {
	const memo = new Map();
	return _fibMemo(n, memo);
}

console.log(fibMemo(1000));
