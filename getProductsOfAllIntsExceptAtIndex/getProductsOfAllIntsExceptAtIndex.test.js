const getProductsOfAllIntsExceptAtIndex = require('./getProductsOfAllIntsExceptAtIndex.js');


// Jest provides '.toEqual' function that can compare two arrays
// Build my own equality function for practice - use jest's '.toBeTruthy()'

let isEqual = (array1, array2) => {
  let isEqual = true

  if (array1.length !== array2.length) {
    return false;
  }
  // array1.length !== array2.length ? false : true

  array1.forEach((i, index) => {
    if ( i !== array2[index]){
      isEqual = false;
    }
  })

  return isEqual;
}

let array1 = [1, 7, 3, 4];
let array2 = [1, 7, 3, 5];
console.log(isEqual(array1, array2))

test('testing isEqual function', () => {
  let array1 = [1, 7, 3, 4];
  let array2 = [1, 7, 3, 4];
  let array3 = [1, 7, 3, 10];

  expect(isEqual(array1, array2)).toBeTruthy()
  expect(isEqual(array1, array3)).toBeFalsy()
})

