# Redux Promise

This is a refactoring of the _react-exercises/22-redux-thunk/_ exercise. It is setup so that the AJAX request that will get the list of categories and nominees will now use redux promise instead of redux thunk.

I'm not including every file for this - only the files that are different from _react-exercises/22-redux-thunk/_ exercise. Here is what has changed:

I installed the package _redux-promise-middleware_.

`store.js` - promise was added to the store's boilerplate.

`actionTypes.js` - added the action _FETCH_ALL_NOMINEES_ to the list of related actions that are already there.

`fetchAllNomineesActions.js` - refactored this file to use Redux promise.
