import {
  SIGNUP_START,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from '../actions/types';


const initialState = {
  isSignupInProgress: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return { ...state, isSignupInProgress: true };
    case SIGNUP_SUCCESS:
      return { ...state, isSignupInProgress: false, user: action.data.user };
    case SIGNUP_ERROR:
      return { ...state, isSignupInProgress: false, error: action.data.error };
    default:
      return (state);
  }
};

export default userReducer;
