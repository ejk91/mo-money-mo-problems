const getMaxProfit = ('./appleStocks.js');

test('finds max stock profit', () => {
  var yesterdayStockPrices = [10, 7, 5, 8, 11, 9];
  expect(getMaxProfit(yesterdayStockPrices)).toBe(6);
});