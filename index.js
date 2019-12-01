// Your code here
const mapToNegativize = sourceArray => {
  const newArray = [];
  for (let el of sourceArray) {
    newArray.push(el * -1);
  }
  return newArray;
};

const mapToNoChange = sourceArray => {
  const newArray = [];
  for (let el of sourceArray) {
    newArray.push(el);
  }
  return newArray;
};

const mapToDouble = sourceArray => {
  const newArray = [];
  for (let el of sourceArray) {
    newArray.push(el * 2);
  }
  return newArray;
};

const mapToSquare = sourceArray => {
  const newArray = [];
  for (let el of sourceArray) {
    newArray.push(el ** 2);
  }
  return newArray;
};

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  for (let i = 0; i < sourceArray.length; i++) {
    startingPoint += sourceArray[i];
  }
  return startingPoint;
};

const reduceToAllTrue = sourceArray => {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false;
    }
  }
  return true;
};

const reduceToAnyTrue = sourceArray => {
  for (let el of sourceArray) {
    if (el) {
      return true;
    }
  }
  return false;
};
