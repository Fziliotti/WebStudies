
Once:
Há momentos em que você pode preferir que uma determinada funcionalidade só aconteça uma vez, semelhante à maneira como você usaria um evento onload. Este código fornece esse recurso rapidamente:

```js
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

// Usage
var canOnlyFireOnce = once(function() {
	console.log('Fired!');
});
```