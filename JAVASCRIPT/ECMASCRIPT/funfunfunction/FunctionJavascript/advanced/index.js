const fs = require('fs')

const fileText = fs.readFileSync('text.txt', 'utf8')
const arrayOfLines = fileText.trim('').split('\n')
const splitComma = arrayOfLines.map(i => i.split(','))

const createStructure = splitComma.map(i => {
  let obj = {}
  obj.nome = i[0]
  obj.produto = i[1]
  obj.preco = i[2]
  return obj
})

const createStructure2 = splitComma.reduce((acc, atual) => {

  acc[atual[0]] = acc[atual[0]] || []
  acc[atual[0]].push({
    name: atual[1],
    price: atual[2],
    qtd: atual[3]
  })
  return acc

}, {})


console.log(createStructure)
console.log('*******************************************')
console.log(createStructure2)
