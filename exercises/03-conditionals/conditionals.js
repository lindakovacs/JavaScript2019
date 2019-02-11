/**
 * Refactor the following to:
 * 1. Use a switch statement instead of an if statement
 * 2. Use the spread operator to copy objects in each case statement
 * @param {Object} product an object representing a product in a store,
 * which has a *name* and a *cost*.
 * e.g. { name: "toothbrush", cost: 1.99 }
 * @param {Object} action an object that represents a request to change
 * a product cost. It will contain an *type* of "ADD", "MULTIPLY",
 * "SUBTRACT" or "DELETE". It will also have a *payload*, which will be
 * the number to added to / multiplied by / subtracted from / or divided by the
 * original cost.
 * e.g. { name: "toothbrush", cost: 1.99 }
 * @returns a clone of the original product object, but with an updated cost
 *
 * @example // First example
 * var product = {
 *   name: "toothbrush",
 *   cost: 1.99
 * };
 * var action = {
 *   type: "ADD",
 *   payload: 1.00
 * };
 *
 * product = updateProduct(product, action);
 * console.log(product); // { name: "toothbrush", cost: 2.99 }
 *
 * @example // Second example
 * var product = {
 *   name: "shampoo",
 *   cost: 8.99
 * };
 * var action = {
 *   type: "SUBTRACT",
 *   payload: 2.00
 * };
 *
 * product = updateProduct(product, action);
 * console.log(product); // { name: "shampoo", cost: 6.99 }
 */

var updateProduct = (product, action) => {
  var newProduct;
  // Do not change above this line

  if (action.type === "ADD") {
    // Use the spread operator here instead
    newProduct = product;
    newProduct.cost = product.cost + action.payload;
  } else if (action.type === "MULTIPLY") {
    // Use the spread operator here instead
    newProduct = product;
    newProduct.cost = product.cost * action.payload;
  } else if (action.type === "SUBTRACT") {
    // Use the spread operator here instead
    newProduct = product;
    newProduct.cost = product.cost - action.payload;
  } else if (action.type === "DIVIDE") {
    // Use the spread operator here instead
    newProduct = product;
    newProduct.cost = product.cost / action.payload;
  } else {
    // Use the spread operator here instead
    newProduct = product;
  }

  return newProduct; // Do not change this
};

module.exports = {
  updateProduct
};
