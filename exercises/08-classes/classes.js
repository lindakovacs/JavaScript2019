/**
 * Refactor this to use ESNext class syntax.
 *
 * @property {number} total you will be adding to (and in the problem below) subtracting from this number. It should start at 0.
 *
 * @constructor
 * @param {number} startValue On instantiation, the class should be passed an optional startValue, which the total will start at if it is a number.
 *
 * The function should contain two methods (functions):
 * @method add should accept a parameter of type number. The function should add the number to total.
 * @method get returns the value of total.
 *
 * NOTE that the linter is not up-to-date with ESNext class properties proposal,
 * meaning that you will see red squiggly lines where they do not belong.
 */
function Calculator(startValue) {
  let total = 0;
  if (typeof startValue === "number") total = startValue;
  return {
    add: num => {
      total += num;
    },
    get: () => total
  };
}

/**
 * Create NewCalculator ESNext class which will extend the class Calculator.
 *
 * It should have the method:
 * @method substract which should accept a parameter of type number. The function should subtract the parameter from the total.
 */

/**
 * Ignore this. It is for testing
 */
let nc = undefined;
try {
  nc = NewCalculator;
} catch (e) {}

module.exports = {
  Calculator,
  NewCalculator: nc
};
