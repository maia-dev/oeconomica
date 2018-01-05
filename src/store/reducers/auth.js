import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  name: null,
  tokenExp: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        name: action.name,
        tokenExp: action.exp,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        token: null,
        name: null,
        tokenExp: null,
      };
    default:
      return state;
  }
};

export default reducer;
