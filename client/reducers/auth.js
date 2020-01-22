import {
  AUTH_START,
  AUTH_ERROR,
  AUTH_SUCCESS,
  TOKEN_VERIFICATION_START,
  TOKEN_VERIFICATION_ERROR,
  TOKEN_VERIFICATION_SUCCESS,
} from '../actions/types';

const initialState = {
  isAuthInProgress: false,
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, isAuthInProgress: true };
    case AUTH_ERROR:
      return {
        ...state,
        authError: action.data,
        isAuthInProgress: false,
        isAuthenticated: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        isAuthInProgress: false,
        authError: null,
        isAuthenticated: true,
      };
    case TOKEN_VERIFICATION_START:
      return {
        ...state,
        isAuthInProgress: true,
        authError: null,
        isIdentifyingToken: true,
      };
    case TOKEN_VERIFICATION_ERROR:
      return {
        ...state,
        isAuthInProgress: false,
        authError: action.data.error,
        isIdentifyingToken: false,
      };
    case TOKEN_VERIFICATION_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        isAuthInProgress: false,
        authError: null,
        isAuthenticated: true,
        isIdentifyingToken: false,
      };
    default:
      return state;
  }
};

export default authReducer;
