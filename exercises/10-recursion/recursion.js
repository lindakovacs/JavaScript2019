const { departmentStores } = require("./recursion-departmentStores-data");
const { tree } = require("./recursion-tree-data");

/**
 * Using recursion, find the object in the node tree that has a given id.
 * You will be looping through the data in *recursion-find-id-data.json*.
 *
 * @param {number} id
 * @returns {Object} the object that the id is in
 *
 * @example
 * findId(1234);
 * // This should return:
 * {
 *    id: 567897,
 *    name: 'Consultants, Reviewers, and National Geographic Exploration',
 *    activityId: 'ZNRAE749BSD0CTGHY888SSSZ',
 *    nodeType: 'activity',
 *    suppressed: false,
 *    hidden: false
 * }
 */


// https://medium.freecodecamp.org/recursion-is-not-hard-858a48830d83
// http://luxiyalu.com/object-prototype-tostring-call/
// https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
// https://30secondsofcode.org/
// https://medium.com/data-scraper-tips-tricks/safely-read-write-in-deeply-nested-objects-js-a1d9ddd168c6

//const findId = (data, id) => {};

// const findId = (data, id) => {
//   if(data[0] === id) {
//     return data[0];
//   } else {
//     [data[0],...sliceData] = data;
//     return findId(sliceData, id);
//   }

// const findId = (data, id, key) => {
//   data.reduce((a, item) => {
//     if (a) return a;
//     if (item.id === itemId) return item;
//     if (item[key]) return findId(item[key], id, key)
//   }, null)
// };

// const findId = (data, id) => {
//   let arr = [];
//   for (let item of Object.values(data)) {
//         if (Array.isArray(dept)) {
//             return arr.push(data);
//         } else {
//         for (let item of Object.values(data)) {
//           findId(item, id);
//         }
//         for (let obj of arr) {
//           if (obj.id === id) {
//             return obj;
//           }
//         }
//       }
//     }
// };

// const findId = (data, id) => {
//   id in data
//     ? data[id]
//     : Object.values(data).reduce((acc, val) => {
//       if (acc !== undefined) return acc;
//       if (typeof val === 'object') return findId(val, id);
//     }, undefined);
// };

let obj = {};
const findId = (data, id) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      obj = data[i];
    } else if (
      data[i].children &&
      data[i].children.length &&
      typeof data[i].children === "object"
    ) {
      findId(data[i].children, id);
    }
  }
  return obj;
}

/**
 * Using recursion, remove the object from the node tree that has a given id.
 * You will be looping through the data in *recursion-delete-store.json*
 *
 * @param {number} id
 * @returns {Object} the entire data source, except it won't have the
 * object with the matching id
 *
 * @example
 * //deleteStore(567897);
 * // This should return:
 * {
 *   id: 1234567,
 *   store: 'Walmart',
 *   // ...
 * },
 * {
 *   branches: [
 *     // This branch is removed because it has id 567897
 *     {
 *       id: 567890,
 *       store: 'Walmart',
 *       // ...
 *     }
 *   ]
 * }
 */

//const deleteStore = (stores, id) => {};

// const deleteStore = (stores, id) => {
  // if (store[0] === id) return store[0];
  // [store[0],...sliceArray] = store;
  // return deleteStore(sliceArray, id);
// };

// https://kostasbariotis.com/node-js-recursion/
// https://stackoverflow.com/questions/33989820/recursive-way-of-removing-an-item-from-a-javascript-object
// https://blog.logrocket.com/getting-started-with-recursion-for-tree-traversal-9a89fe6e772
// https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393
const deleteStore = (stores, id) => {
  return stores.reduce((acc, store, ids) => {
    if (store.id === id) {
      stores.splice(ids, 1);
    } else if (
      store.branches &&
      store.branches.length &&
      typeof store.branches === "object"
    ) {
      deleteStore(store.branches, id);
    }
    return stores;
  }, []);
};

module.exports = {
  findId,
  deleteStore
};
