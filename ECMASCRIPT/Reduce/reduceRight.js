const letters = ['z', 'a', 'c', 'w']
const word = letters.reduceRight((previous, letter) => previous + letter)
console.log(word);
// 'wcaz'