const getProductsOfAllIntsExceptAtIndex = require('./getProductsOfAllIntsExceptAtIndex.js');
console.log(getProductsOfAllIntsExceptAtIndex)


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


test('testing isEqual function', () => {
  let array1 = [1, 7, 3, 4];
  let array2 = [1, 7, 3, 4];
  let array3 = [1, 7, 3, 10];

  expect(isEqual(array1, array2)).toBeTruthy()
  expect(isEqual(array1, array3)).toBeFalsy()
})

test('gets all products of all integers except at index', () => {
  expect(isEqual(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]), [84, 12, 28, 21])).toBeTruthy()
  expect(isEqual(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9]), [540, 270, 90, 108, 60])).toBeTruthy()
})


