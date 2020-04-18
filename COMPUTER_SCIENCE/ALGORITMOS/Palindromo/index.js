function isPalidrome1 (string) {
  let arrayString = [...string]
  let numOfLetters = string.length -1
  let isPalidrome = true

  for(let i = numOfLetters, j = 0; i >= 0; i--, j++){
    let firstStringLetterOfIteration = arrayString[j]
    let lastStringLetterOfIteration = arrayString[i]

    if( lastStringLetterOfIteration !== firstStringLetterOfIteration){
      isPalidrome = false
      break
    }
  }
  return isPalidrome
}

function isPalidrome2(str) {
  const reverse = str.split('').reverse().join('')
  return str === reverse
}

const isPalidrome3 = str => str.split('').every((char, i) => char === str[str.length - i - 1]) 
const isPalidrome4 = str => !str.split('').some((char, i) => char !== str[str.length - i - 1])


console.time('op1')
isPalidrome1('abbab')
console.timeEnd('op1')

console.time('op2')
isPalidrome2('abba')
console.timeEnd('op2')

console.time('op3')
isPalidrome3('abba')
console.timeEnd('op3')

console.time('op4')
isPalidrome4('abba')
console.timeEnd('op4')

