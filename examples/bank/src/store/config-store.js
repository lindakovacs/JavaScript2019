import { createStore } from 'redux';
import rootReducer from './root-reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
