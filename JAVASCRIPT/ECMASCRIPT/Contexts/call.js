
this.name = 'Murilovisk'

function sayMyName(age){
  this.age = age
  console.log(this.name, this.age)
}

const dev = {
  name: 'Fabricio'
}

sayMyName.call(this, 18)

sayMyName.call(dev,19)

console.log(this.age)
console.log(dev.age)