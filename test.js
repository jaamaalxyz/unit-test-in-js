const assert = require('assert');
const operations = require('./operations');

// Test case for add() - 1
it('should calculates the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4)
});

// Test case for add() - 2
it('should return -2 to for added -1 and -1', () => {
  assert.equal(operations.add(-1, -1), -2)
});

// Test case for subtract()
it('should return 30 when subtract from 33 to 3', () => {
  assert.equal(operations.subtract(33, 3), 30)
});

// Test case for multiply()
it('should return 20 when 5 multiplied by 4', () => {
  assert.equal(operations.multiply(5, 4), 20)
});

// Test case for divide()
it('should return 2 when 10 divide by 5', () => {
  assert.equal(operations.divide(10, 5), 2)
});

// Below test cases for input validation
it('indicates failure when a string is used instead of a number', () => {
  assert.equal(operations.validateNumbers('beauty', 10), false)
});

it('indicates failure when two strings is used instead of numbers', () => {
  assert.equal(operations.validateNumbers('Jamal', 'Beauty'), false)
});

it('successfully run when two inputs are number', () => {
  assert.equal(operations.validateNumbers(10, 10), true)
});