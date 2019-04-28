import { SIGNIN } from "../constants/actionTypes";

import { signinRequest } from "../services/api";

import history from "../history";

/**
 * Redux promise
 */
const signAction = (memberId, pinNumber) => {
  return {
    type: SIGNIN,
    payload: signinRequest(memberId, pinNumber)
  };
};

/**
 * This uses:
 * 1. Redux thunk to dispatch another action
 * 2. The history API to navigate to the home page once the user successfully authenticates
 * (A JWT token will be in the AJAX response. That is how we know the user successfully authenticates)
 */
export const signin = (memberId, pinNumber) => {
  return dispatch => {
    dispatch(signAction(memberId, pinNumber)).then(data => {
      if (data.value.token) {
        history.push("/");
      }
    });
  };
};
