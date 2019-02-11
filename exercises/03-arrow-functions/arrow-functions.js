/**
 * To run this over the command line, enter:
 * ```bash
 * npm run test ./test/03-arrow-functions/arrow-functions-test.js
 * ```
 * Or you can use VSCode's debugger tool.
 */

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
function multiply(a, b) {
  return a * b;
}

/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "doubleNumbers".
 * @param {array} array
 * @returns an array where each number in the array is twice of what it was before
 * @example
 * doubleNumbers([1, 3, 5]); // [2, 6, 10]
 */
function doubleNumbers(array) {
  var newArray = [];
  for (var num of array) {
    newArray.push(num * 2);
  }
  return newArray;
}

/**
 * Refactor wait and the function inside of window.setTimeout below
 * to use ES6 arrow syntax
 */

var isFinished = false;

function wait() {
  setTimeout(function() {
    isFinished = true;
  }, 100);
}

/**
 * Ignore this. This is for testing your answer.
 */
exports.after = {
  multiply,
  doubleNumbers,
  wait,
  getIsFinished: () => isFinished
};
