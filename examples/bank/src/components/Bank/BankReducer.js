import * as types from '../../actions/types';

const initialState = {
  bankBalance: {}
};

export default function reducer(state = initialState, action) {
  console.log('before the switch', action);
  switch (action.type) {
    case types.GET_BANK_BALANCE: {
      return { ...state, bankBalance: action.payload };
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
