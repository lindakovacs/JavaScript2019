/**
 * Given a student name, formats and prints out the value in a visually appealing way
 * (e.g. with hyphens or astericks before each value) with `console.log`
 * @example
 *  - Jamal
 *  - Matina
 *  - Eddy
 * @param {string} name instuctor name
 */
//const printer = () => {};
const printer = (name) => {
  return "*** " + name + " ***";
  //return `*** ${name} ***`;
};

//function prettier(name) { return "*** " + name + " ***";}

/**
 * Loops through the array of strings
 * and for each name, calls upon the function printer to print out the name
 * @param {array}
 * @param {function} callback printer function
 */
//const printNames = () => {};
const printNames = (arr, printer) => {
  for (var i = 0; i < arr.length; ++i) {
    printer(arr[i]);
  }
  //const printNames = (arr, printer) => {
  //let result = '';
  //for (var name of arr) {
  //result = result + printer(name);
  // }
  //return result;
  // };
  //}
  //return "*** " + printer.arr[i] + " ***";
};

module.exports = {
  printer,
  printNames
};
