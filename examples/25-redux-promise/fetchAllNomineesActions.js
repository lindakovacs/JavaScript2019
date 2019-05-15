import * as types from "../constants/actionTypes";

import { fetchAllNomineesRequest } from "../services/api";

// Refactored to use Redux promise
export const fetchAllNominees = () => {
  return {
    type: types.FETCH_ALL_NOMINEES,
    payload: fetchAllNomineesRequest()
  };
};
