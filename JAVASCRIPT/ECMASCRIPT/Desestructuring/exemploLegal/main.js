function calculate({operands = [1, 2], type = 'addition'} = {}) {
    return operands.reduce((acc, val) => {
        switch(type) {
            case 'addition':
                return acc + val
            case 'subtraction':
                return acc - val
            case 'multiplication':
                return acc * val
            case 'division':
                return acc / val
        }
    }, ['addition', 'subtraction'].includes(type) ? 0 : 1)
}


console.log(calculate()) // 3
console.log(calculate({type: 'division'})) // 0.5
console.log(calculate({operands: [2, 3, 4], type: 'multiplication'})) // 24