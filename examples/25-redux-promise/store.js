import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"; // Imported promise package

/**
 * Allowing you to see Redux actions in your dev tools.
 * @see https://github.com/zalmoxisus/redux-devtools-extension#usage
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, promise]; // Plugging in promise here
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)) // Plugging in middleware with promise here
);

export default store;
