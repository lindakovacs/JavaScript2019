import * as types from '../../actions/types';

const initialState = {};

export default function reducer(state = initialState, action) {
  console.log('before the switch', action.type);
  switch (action.type) {
    case types.BEGIN_AJAX_CALL: {
      return {
        ...state,
        isLoading: true
      };
    }
    case types.SUCCESS_AJAX_CALL: {
      return {
        isLoading: false
      };
    }
    case types.GET_BANK_BALANCE: {
      alert('test');
      return {
        ...state,
        bankBalance: action.payload
      };
    }
    case types.DEPOSIT_MONEY: {
      console.log('action', action);
      return {
        ...state,
        bankBalance: parseInt(state.bankBalance) + parseInt(action.payload)
      };
    }
    case types.WITHDRAW_MONEY: {
      return {
        ...state,
        bankBalance: parseInt(state.bankBalance) - parseInt(action.payload)
      };
    }
    default:
      return state;
  }
}
