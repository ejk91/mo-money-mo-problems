/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.

Write a function that finds the largest possible product of any three numbers
from an array. 
 Example:
 largestProductOfThree([2, 1, 3, 7]) === 42
 
Extra credit: Make your function handle negative numbers.
*/

// let largestProductOfThree = (array) => {
//   if (array.length < 3) {
//     return 'need at least three integers';
//   }
//   let result = 1;
//   // sort the array and find the product of the last three numbers
//   array.sort((a, b)=> {
//     return a - b;
//   })

//   result *= array.pop();
//   let largest = result;
//   result *= array.pop();
//   result *= array.pop();
//   let smallest = array.shift();
//   smallest *= array.shift();

//   return Math.max(smallest * largest, result);

// }

let largestProductOfThree = (array) => {
  // declare needed variables
  let highestProductOf3,
    highestProductOf2,
    highest,
    lowestProductOf2,
    lowest;

    highest = array[0];
    lowest = array[0];

    highestProductOf2 = highest * array[1];
    lowestProductOf2 = lowest * array[1];

    highestProductOf3 = highestProductOf2 * array[2];

  for(let i = 2; i < array.length; i++) {
    // let current = array[i];
    // if (current < 0) {
    //   lowestProductOf2 = Math.min(current * lowest, lowestProductOf2);
    //   lowest = Math.min(current, lowest)
    // } else {
    //   highestProductOf2 = Math.max(current * highest, highestProductOf2);
    //   highest = Math.max(current, highest)
    // }

    let current = array[i];
    highestProductOf3 = Math.max(
      highestProductOf3, 
      highestProductOf2 * current,
      lowestProductOf2 * current
      )

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      lowest * current
      )

    highestProductOf2 = Math.max(
      highestProductOf2,
      highest * current
      )

    lowest = Math.min(lowest, current);
    highest = Math.max(highest, current);
  }

  return highestProductOf3

}

module.exports = largestProductOfThree;

console.log(largestProductOfThree([-10,-10,1,3,2]))