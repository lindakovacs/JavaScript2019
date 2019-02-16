/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @param  {string}
 *  @return {string}
 *
 *  @example confirmEnding("Bastian", "n") true
 *  @example confirmEnding("Connor", "n")  false
 *
 */

var confirmEnding = (str, target) => {
  return (str.substr(-target.length) === target) ? true : false;
  //return str.substr(-target.length) === target;
  // if (str.substr(-target.length) === target) {
  //   return true;
  // } else {
  //   return false;
  // }
};

/**
 *  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 *  @param  {string}
 *  @return {string}
 *
 *  @example repeatStringNumTimes("*", 3)
 *  @example repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *  @example repeatStringNumTimes("abc", -2) should return ""
 */

var repeatStringNumTimes = (str, times) => {
  //var newString = '';

  return (times > 0) ? str.repeat(times) : "";
  // if (times > 0)
  //   return str.repeat(times);
  // else
  //   return "";
};
//console.log(repeatStringNumTimes('abc', 3));

/**
 *  Find the Longest Word in a String
 *  @param {string}
 *  @return {string}
 *
 *  @example findLongestWordLength("Google do a barrel roll")  should return 6
 *  @example findLongestWordLength("May the force be with you") should return 5
 *
 */

var findLongestWordLength = (str) => {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
};

module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};
