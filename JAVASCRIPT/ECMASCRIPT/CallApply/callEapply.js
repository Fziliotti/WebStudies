function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(avgArray([2, 3, 4, 5])) // 3.5


function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

let b = avg.apply(null, [2, 3, 4, 5])

console.log(b)

// CALL
var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "John",
  lastName: "Doe",
}
var person2 = {
  firstName: "Mary",
  lastName: "Doe",
}
person.fullName.call(person1); // Will return "John Doe"


// APPLY
var person = {
  fullName: function() {
      return this.firstName + " " + this.lastName;
  }
}

var person1 = {
  firstName: "Mary",
  lastName: "Doe",
}
person.fullName.apply(person1);  // Will return "Mary Doe"