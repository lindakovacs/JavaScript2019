import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
