import axios from 'axios';
import {
  AUTH_START,
  AUTH_ERROR,
  AUTH_SUCCESS,
  SIGNUP_START,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  TOKEN_VERIFICATION_START,
  TOKEN_VERIFICATION_ERROR,
  TOKEN_VERIFICATION_SUCCESS,
} from './types';

const loginUser = (formData, cb) => async (dispatch) => {
  dispatch({ type: AUTH_START });
  try {
    const res = await axios.post('/api/v1/auth/login', formData);
    dispatch({
      type: AUTH_SUCCESS,
      data: { user: res.data.user },
    });
    localStorage.setItem('authToken', res.data.token);
    cb();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      data: { error },
    });
  }
};
const signupUser = (formData, cb) => async (dispatch) => {
  dispatch({ type: SIGNUP_START });
  try {
    const res = await axios.post('api/v1/user/new', formData);
    dispatch({
      type: SIGNUP_SUCCESS,
      data: { user: res.data.user },
    });
    cb();
  } catch (error) {
    dispatch({
      type: SIGNUP_ERROR,
      data: { error },
    });
  }
};
const verifyUser = (token) => async (dispatch) => {
  dispatch({ type: TOKEN_VERIFICATION_START });
  try {
    const res = await axios.get('/api/v1/auth/me', {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: TOKEN_VERIFICATION_SUCCESS,
      data: { user: res.data.user },
    });
  } catch (error) {
    dispatch({
      type: TOKEN_VERIFICATION_ERROR,
      data: { error },
    });
  }
};

export { loginUser, signupUser, verifyUser };
