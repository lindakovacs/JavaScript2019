/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */
//const forEach = (arr, callback) => {};
const forEach = (arr, callback) => {
  for(var i=0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
//const showFirstAndLast = arr => {};
const showFirstAndLast = arr => {
// return str.charAt(0) + str.substring(-1)
//  var newArray = [];
//   for (var item of arr) {
//     //newArray.push(item.substring(0) + item.substring(-1));
//     newArray.push(item.charAt(0) + item.charAt(-1));
//   }
//   return newArray;
// var firstLast = [];

// arr.split('').forEach(function(letter, index) {
//   if (index === 0 || [index-1] === ' ') {
//     firstLast.push(letter.charAt(0) + letter.charAt(-1));
//   } else {
//     firstLast.push(letter);
//   }
// })
// return firstLast.join('');

// var newArray = [];
// arr.forEach(function(str) {
//   var firstLast = str.split('')[0] + str.split('')[str.length-1];
// })
// return firstLast.join('');

// let newArray = [];
// arr.forEach(function(name) {
//     var nameArray = name.split('');
//     let firstAndLast = nameArray[0] + nameArray[nameArray.length-1]
//     newArray.push(firstAndLast);
//   })
//   return newArray;

return arr.map(function(name) {
  let nameArray = name.split("");
  let firstAndLast = nameArray[0] + nameArray[nameArray.length - 1];
  return firstAndLast;
});

};

module.exports = {
  forEach,
  showFirstAndLast
};
