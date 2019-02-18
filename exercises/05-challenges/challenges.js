/**
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
 *  once it has been sorted.
 * The returned value should be a number.
 *  @param  {array}
 *  @param  {number}
 *  @return {number}
 *
 *  @example getIndexToIns([10, 20, 30, 40, 50], 35) should return 3
 *  @example getIndexToIns([10, 20, 30, 40, 50], 30) should return 2
 *  @example getIndexToIns([5, 3, 20, 3], 5) should return 2
 *  @example  getIndexToIns([], 1) should return 0
 *
 */

const getIndexToIns = (array, num) => {};

/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 *  @param  {array}
 *  @param  {array}
 *
 *  @return {array}
 *  @example  [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]
 *  @example [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]
 *  @example [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
 *  @example [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"]
 */

const diffArray = (arr1, arr2) => {};

module.exports = {
  diffArray,
  getIndexToIns
};
