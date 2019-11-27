// Your code here
const mapToNegativize = (sourceArray) => {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1);
    }
    return newArray;
}

const mapToNoChange = (sourceArray) => {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i]);
    }
    return newArray;
}

const mapToDouble = (sourceArray) => {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2);
    }
    return newArray;
}

const mapToSquare = (sourceArray) => {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] ** 2);
    }
    return newArray;
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let endingPoint = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        endingPoint += sourceArray[i];
    }
    return endingPoint;
} 

const reduceToAllTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false;
    }
    return true;
}

const reduceToAnyTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true;
    }
    return false;
}