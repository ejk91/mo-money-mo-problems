const getMaxProfit = require('./appleStocks.js');

test('finds max stock profit of 6', () => {
  var yesterdayStockPrices = [10, 7, 5, 8, 11, 9];
  expect(getMaxProfit(yesterdayStockPrices)).toBe(6);
});

test('finds max stock profit of 5', () => {
  var yesterdayStockPrices = [11, 7, 5, 8, 10, 9];
  expect(getMaxProfit(yesterdayStockPrices)).toBe(5);
});

test('finds profit even if a value is negative', () => {
  var yesterdayStockPrices = [11, 7, -5, 8, 10, 9];
  expect(getMaxProfit(yesterdayStockPrices)).toBe(3);
});