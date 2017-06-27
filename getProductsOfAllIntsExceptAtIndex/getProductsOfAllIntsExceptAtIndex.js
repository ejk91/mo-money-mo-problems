/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers 
and returns an array of the products.

For Example:

[1, 7, 3, 4] => [84, 12, 28, 21]

This is done by calculating:
[7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division.
*/

// let getProductsOfAllIntsExceptAtIndex = (array) => {
//   let results = []
//   for(let i = 0; i < array.length; i++) {
//     results.push(findProductExcept(i, array));
//   }
//   return results;
// }

// let findProductExcept = (index, array) => {
//   let product = 1
//   for (let k = 0; k < array.length; k++) {
//     if ( index !== k) {
//       product *= array[k]
//     }
//   }
//   return product
// }

// Cannot use unshift... you will try to access array indices that do not exist yet!
  // for (let k = array.length - 1; k >= 0  ; k--) {
  //   console.log('k =', k)
  //   if (k === 0) {
  //     after.push(1);
  //   } else if (k === array.length - 1){
  //     console.log()
  //     after.unshift(array[k])
  //   } else {
  //     console.log('array', array[k + 1]);
  //     console.log('after', after[k]) ---- doent exist yet!
  //     after.unshift(array[k + 1] * after[k + 1])
  //   }
  // }

var getProductsOfAllIntsExceptAtIndex = (array) => {
  let before = [];
  let after = [];

  for(let j = 0; j < array.length; j++) {
    if (j === 0) {
      before.push(1);
    } else {
      before.push(array[j-1] * before[j-1]);
    }
  }
  let afterProd = 1;
  for (let k = array.length - 1; k >= 0  ; k--) {
    after[k] = afterProd;
    // afterProd *= array[k]
    // after.unshift(afterProd) // cant use unshift because values wouldnt be present 
    before[k] *= after[k];
    afterProd *= array[k]
  }

  console.log('before', before);
  console.log('after', after);

  return before;
}

module.exports = getProductsOfAllIntsExceptAtIndex;

console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 3, 4, 5, 6]))


