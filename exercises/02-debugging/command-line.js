/**
 * You will be completing your first exercises over command line.
 * To see if your answers are correct, we will be running unit tests.
 * To see what a unit test is, open *test/02-debugging/command-line-test.js*
 *
 * To run the test, type the following in your terminal or Git Bash:
 * ```bash
 * npm run test ./test/02-debugging/command-line-test.js
 * ```
 * Or you can use the debugger in Visual Studio Code.
 * @see https://www.youtube.com/watch?v=9wP4SDSr-ko
 */

/**
 * Complete the function add, which should add two numbers
 * @param {number} a
 * @param {number} b
 * @return {number} sum of two numbers
 */

function add(a, b) {
  return a + b;
}

/**
 * Complete the function multiply, which should multiply two numbers
 * @param {number} a
 * @param {number} b
 * @return {number} product of two numbers
 */

function multiply(a, b) {
  return a * b;
}

/**
 * Debug this function using either `console.log` or
 * breakpoints within Visual Studio Code.
 * @return {string} large string of text
 */

function getMessage() {
  var message = "";

  for (var i = 1; i < 10; i++) {
    message = message + "...";
  }

  message = message + "\n"; // New line

  var fruits = ["apple", "kiwi", "banana", "orange", "blueberry"];
  for (var j = 0; j < fruits.length; j++) {
    message = message + String(i) + " " + fruits[j] + "\n";
  }

  var moreFruits = ["cranberry", "mango", "passion fruit", "avocado", "cherry"];
  for (var k = 0; k < moreFruits.length; k++) {
    var num = k + fruits.length;
    message = message + String(num) + " " + fruits[k] + "\n";
  }

  for (var z = 1; z < 10; z++) {
    message = message + "...";
  }

  return message;
}

/**
 * This allows other files to access the functions above.
 * So when you run the tests, the tests will be able to call upon
 * add, multiply and getMessage
 */
module.exports = {
  add,
  multiply,
  getMessage
};
