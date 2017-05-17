/*
Suppose we could access yesterday's stock prices as an array, where:

The values are the price in dollars of Apple stock.
A higher index indicates a later time.
So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

stockPricesYesterday[60] = 500;

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday); // returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

//var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

var getMaxProfit = function(array) {
  // declare min max slicedArray index variables
  var min = array[0];
  var max = 0;
  var slicedArray;
  var minIndex;
  var result;
  // find min first
  array.forEach((number, index) => {
    if (number < min && number >= 0) {
      min = number;
      minIndex = index;
    }
  })
  // slice for numbers after min 
  // find max within sliced array
  max = min;
  array.slice(minIndex).forEach((number) => {
    if (number > max) {
      max = number;
    }
  })
  // get the difference 
  result = max - min;
  if (result === 0) {
    result = getMaxProfit(array.slice(0, minIndex))
  }
  return result;
}
//console.log(getMaxProfit(stockPricesYesterday));

module.exports = getMaxProfit;
