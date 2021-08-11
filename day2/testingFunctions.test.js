const { sum, divide } = require('./testingFunctions');

test('Should add two numbers properly', () => {
  expect(sum(1,5)).toBe(6);
})

test('Should get string of both a & b values -> ab', () => {
  expect(sum('2', 1)).toBe('21')
})

test('Should get an error if you use a string and a number', () => {
  expect(divide('3', 0)).toBe(Infinity)
})

