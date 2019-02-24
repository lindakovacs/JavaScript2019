/**
 * Recreate the map function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {array} arr
 * @param {function} callback
 * @returns {array} new array
 */
//const map = (arr, callback) => {};

const map = (arr, callback) => {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var newVal = callback(arr[i], i, arr);
    result.push(newVal);
  }
  return result;
};

/**
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */
//const doubleValues = arr => {};
const doubleValues = arr => {
  return arr.map(function(item) {
    return item * 2;
  });
};
/**
 * Given an array nested with objects
 * and give the name of a shared key that is in all the nested objects,
 * extract the values from the object that have the given key
 * and returns the extracted values in an array
 * @param {array} arr array of objects
 * @param {string} key what, from the object you want to return in your new array
 * @returns {array} new array
 *
 * @example
 * const arrayOfNames = [
 *  {name: 'Ellie', age: 20},
 *  {name: 'Tim', age: 35},
 *  {name: 'Matt', age: 18},
 *  {name: 'Colt', age: 47}
 * ];
 * extractKey(arrayOfNames, 'name'); // ['Ellie', 'Tim', 'Matt', 'Colt']
 */
//const extractKey = (arr, key) => {};
const extractKey = (arr, key) => {
  return arr.map(key => key.name);
  // return arr.map(function(key) {
  //   return key.name;
  // });
};

module.exports = {
  map,
  doubleValues,
  extractKey
};
