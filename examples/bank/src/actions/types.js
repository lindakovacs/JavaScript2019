export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';
export const GET_BANK_BALANCE = 'GET_BANK_BALANCE';
export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';

export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const END_AJAX_CALL = 'END_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
export const SUCCESS_AJAX_CALL = 'SUCCESS_AJAX_CALL';

export function beginAjaxCall() {
  return { type: BEGIN_AJAX_CALL };
}

export function successAjaxCall(payload) {
  return { type: SUCCESS_AJAX_CALL, payload };
}

export function endAjaxCall() {
  return { type: END_AJAX_CALL };
}

export function errorAjaxCallError() {
  return { type: AJAX_CALL_ERROR };
}
