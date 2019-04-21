function changeAgeImpure(person) {
    person.age = 25;
    return person;
}

var alex = {
    name: 'Alex',
    age: 30
};

var changedAlex = changeAgeImpure(alex);
console.log("----Mudança impura-----")
console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }


console.log("-----------------------------------");

function changeAgePure(person) {
    // var newPersonObj = JSON.parse(JSON.stringify(person));
    var newPersonObj = {...person};
    newPersonObj.age = 25;
    return newPersonObj;
}

var alexPure = {
    name: 'Alex',
    age: 30
};

var alexChanged = changeAgePure(alexPure);

console.log("----Mudança impura-----")
console.log(alexPure); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }