import { combineReducers } from 'redux';
import LoginReducer from '../components/Login/LoginReducer';
import BankReducer from '../components/Bank/BankReducer';
const rootReducer = combineReducers({
  Login: LoginReducer,
  BankAccount: BankReducer
});

export default rootReducer;
