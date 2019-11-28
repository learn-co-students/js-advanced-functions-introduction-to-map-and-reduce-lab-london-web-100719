// Your code here
const mapToNegativize = (array) => {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] * -1)
  }
  return arr
}

const mapToNoChange = (array) => {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i])
  }
  return arr
}

const mapToDouble = (array) => {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] * 2)
  }
  return arr
}

const mapToSquare = (array) => {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] * array[i])
  }
  return arr
}

const reduceToTotal = (source, init = 0) => {
  let result = init
  for (let i = 0; i < source.length; i++) {
    result += source[i]
  }
  return result
}

const reduceToAllTrue = (source) => {
  let result = true
  for (let i = 0; i < source.length; i++) {
    result = result && !!source[i]
  }
  return result
}

const reduceToAnyTrue = (source) => {
  let result = false
  for (let i = 0; i < source.length; i++) {
    result = result || !!source[i]
  }
  return result
}
