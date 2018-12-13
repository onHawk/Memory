import axios from 'axios';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const USER_ENTRIES = 'USER_ENTRIES';

const token = localStorage.getItem('id');

const HOST = 'http://localhost:5000';

export function authError(error) {
  if (error) {
    return {
      type: 'AUTH_ERROR',
      payload: error,
    };
  }

  return {
    type: 'AUTH_SUCCESS',
    payload: 'Registered!',
  };
}

export function register(info, history) {
  return dispatch => {
    axios
      .post(`${HOST}/api/register`, info, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then(res => {
        localStorage.setItem('id', res.data.userToken);
        history.push('/login');
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.data.message) {
          dispatch(authError(err.response.data.message));
        } else if (err.response.data.errmsg) {
          dispatch(authError('email is already in use.'));
        }
      });
  };
}

export function login(credentials, history) {
  return dispatch => {
    axios
      .post(`${HOST}/api/login`, credentials, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then(res => {
        // console.log(res.data);
        localStorage.setItem('id', res.data.userToken);
        axios.defaults.headers.common.Authorization = `bearer token: ${
          res.data.token
        }`;
        console.log(res.data.user);
        dispatch({ type: 'USER_LOGIN', payload: res.data.user });
        dispatch({ type: 'USER_ENTRIES', payload: res.data.user.entries });
        history.push('/home');
      })
      .catch(err => {
        console.log('login error', err);
        dispatch({ type: 'LOGIN_ERROR', payload: 'Wrong username/password' });
      });
  };
}

export function logout(history) {
  return dispatch => {
    dispatch({ type: 'USER_LOGOUT', payload: 'Logged out' });
    localStorage.removeItem('id');
    history.push('/');
  };
}
