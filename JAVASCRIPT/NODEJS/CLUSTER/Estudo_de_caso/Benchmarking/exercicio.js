const http = require('http');

function isPrime(n) {
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function listPrimes(numPrimes) {

  for (let n = 2;  numPrimes > 0;  n++) {
    if (isPrime(n)) {
      primes.push(n);
      numPrimes--;
    }
  }
  return primes;
}

function somaPrimes(numPrimes) {

  for (let n = 2;  numPrimes > 0;  n++) {
    var soma=0;
    if (isPrime(n)) {
     soma += n;
     numPrimes--;
    }
  }
  return soma;
}

function calculate(cnt) {
  let result = Math.random(1);
  const lst = listPrimes(cnt);
  for (let n = 0; n < lst.length; n++) {
    result = Math.tan(result + lst[n]);
  }
  return result;
}

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`${somaPrimes(1000000).toString()}\n`);
}).listen(8000);

console.log('Listening on port 8000');