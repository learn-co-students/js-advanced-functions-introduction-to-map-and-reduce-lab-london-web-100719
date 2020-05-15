// Your code here
function mapToNegativize(num) {
   let negs = []
   for (let i = 0; i < num.length; i++) {
       negs.push(-1 * num[i])
    }
    return negs
}

function mapToNoChange(num) {
    let numb = []
    for (let i = 0; i < num.length; i++) {
        numb.push(num[i])
    }
    return numb
}

function mapToDouble(num) {
    let doubled = []
    for(let i = 0; i < num.length; i++) {
        doubled.push(num[i] * 2)
    }
    return doubled
}

function mapToSquare(num) {
    let squared = []
    for (let i = 0; i < num.length; i++) {
        squared.push(num[i] * num[i])
    }
    return squared
}

function reduceToTotal(num, starter=0) {
    let total = starter
    for(let i = 0; i < num.length; i++) {
        total = total + num[i]
    }
    return total
}

function reduceToAllTrue(num) {
    for(let i = 0; i < num.length; i++) {
        if (!num[i]) return false
    }
    return true
}

function reduceToAnyTrue(num) {
    for(let i = 0; i < num.length; i++) {
        if (num[i]) return true
    }
    return false
}