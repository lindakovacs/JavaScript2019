import * as types from '../../actions/types';
import { beginAjaxCall, successAjaxCall } from '../../actions/types';
const GET_BANK_BALANCE = 10020;

export function getBankBalance() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return setTimeout(() => {
      dispatch(successAjaxCall());
      dispatch({
        type: types.GET_BANK_BALANCE,
        payload: GET_BANK_BALANCE
      });
    }, 3000);
  };
}

export function depositMoney(amountToBeDeposited) {
  return {
    type: types.DEPOSIT_MONEY,
    payload: amountToBeDeposited
  };
}

export function withDrawMoney(withdrawal) {
  return {
    type: types.WITHDRAW_MONEY,
    payload: withdrawal
  };
}
