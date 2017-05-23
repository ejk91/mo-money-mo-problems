const getProductsOfAllIntsExceptAtIndex = require('./getProductsOfAllIntsExceptAtIndex.js');


// Jest provides '.toEqual' function that can compare two arrays
// Build my own equality function for practice - use jest's '.toBeTruthy()'

let isEqual = (array1, array2) => {
  //first check if the two arrays are the same length
    //return false if they arent the same
  // loop through each index and see if they are true
    // if they are return true
    // return false
}


test('testing toEqual', () => {
  let array1 = [1, 7, 3, 4];
  let array2 = [1, 7, 3, 4];
  expect(array1).toEqual(array2);

})