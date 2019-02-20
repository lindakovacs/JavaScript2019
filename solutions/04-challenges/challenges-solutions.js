/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @param  {string}
 *  @return {string}
 *
 *  @example confirmEnding("Bastian", "n") true
 *  @example confirmEnding("Connor", "n")  false
 *
 */

var confirmEnding = (string, letter) => {
  return string[string.length - 1] === letter;
};

/**
 *  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 *  @param  {string}
 *  @return {number}
 *
 *  @example repeatStringNumTimes("*", 3)
 *  @example repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *  @example repeatStringNumTimes("abc", -2) should return ""
 */

// Answer 1
var repeatStringNumTimes = (string, repeatBy) => {
  if (repeatBy < 1) return "";

  var newStr = "";
  for (var i = 0; i < repeatBy; i++) {
    newStr += string;
  }
  return newStr;
};

// Answer 2 - Complements to Nikita
var repeatStringNumTimes = (string, repeatBy) => {
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
  return repeatBy > 0 ? string.repeat(repeatBy) : "";
};

/**
 *  Find the Longest Word in a String
 *  @param {string}
 *  @return {number}
 *
 *  @example findLongestWordLength("Google do a barrel roll")  should return 6
 *  @example findLongestWordLength("May the force be with you") should return 5
 *
 */

// Answer 1
var findLongestWordLength = sentence => {
  var words = sentence.split(" ");

  var longestWordLength = 0;
  for (var word of words) {
    if (word.length > longestWordLength) longestWordLength = word.length;
  }
  return longestWordLength;
};

// Answer 2 - Complements to Nikita
var findLongestWordLength = sentence => {
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  return sentence.split(" ").sort((a, b) => b.length - a.length)[0];
};

module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};
