/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers 
and returns an array of the products.

For Example:

[1, 7, 3, 4] => [84, 12, 28, 21]

This is done by calculating:
[7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division.
*/

let getProductsOfAllIntsExceptAtIndex = (array) => {
  let results = []
  for(let i = 0; i < array.length; i++) {
    results.push(findProductExcept(i, array));
  }
  return results;
}

let findProductExcept = (index, array) => {
  let product = 1
  for (let k = 0; k < array.length; k++) {
    if ( index !== k) {
      product *= array[k]
    }
  }
  return product
}

module.exports = getProductsOfAllIntsExceptAtIndex;

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]))
