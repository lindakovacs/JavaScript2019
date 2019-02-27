/**
 * Build your own find function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @param {array} arr
 * @param {function} callback
 * @returns {mixed} a single value in the array
 */
//const find = (arr, callback) => {};
const find = (arr, callback) => {
  let newArr = [];
  for(let i=0; i<arr.length; i++) {
    let result = callback(arr[i], i, arr);
    //if(result) newArr.push(arr[i]);
    if(result) {
      return arr[i];
    }
}
return newArr[0];
};
/**
 * Find and return the matching user in an array of user objects
 * @param {array} arr array of objects, where each object represents a user
 * @param {number} id the user's id
 * @returns {object} the user object that has the matching id
 *
 * @example
 * const users = [{
 *  id: 1024,
 *  username: "smile134",
 *  email: "smile134@example.com"
 * },{
 *  id: 1025,
 *  username: "newyorkfarmer",
 *  email: "johndoe@example.com"
 * }]
 * findUser(users, 1025);
 * // { id: 1025, username:"newyorkfarmer", email: "johndoe@example.com" }
 */
//const findUser = (arr, id) => {};
const findUser = (arr, id) => arr.find((user) => user.id === id);

module.exports = {
  find,
  findUser
};
