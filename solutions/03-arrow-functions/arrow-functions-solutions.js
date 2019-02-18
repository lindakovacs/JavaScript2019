/**
 * Ignore this. This is for testing your answer.
 */
exports.before = {
  multiply,
  doubleNumbers,
  wait
};

/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "multiply".
 * See if you can fit it on one line.
 * @param {number} a
 * @param {number} b
 * @returns {number} the product of a times b
 */
var multiply = (a, b) => a * b;

/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "doubleNumbers".
 * @param {array} array
 * @returns an array where each number in the array is twice of what it was before
 * @example
 * doubleNumbers([1, 3, 5]); // [2, 6, 10]
 */
var doubleNumbers = array => {
  var newArray = [];
  for (var num of array) {
    newArray.push(num * 2);
  }
  return newArray;
};

/**
 * Refactor wait and the function inside of window.setTimeout below
 * to use ES6 arrow syntax
 */

var isFinished = false;

var wait = () => {
  setTimeout(() => {
    isFinished = true;
  }, 100);
};

/**
 * Ignore this. This is for testing your answer.
 */
exports.after = {
  multiply,
  doubleNumbers,
  wait,
  getIsFinished: () => isFinished
};
