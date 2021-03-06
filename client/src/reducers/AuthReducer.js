import {
  // USER_REGISTERED,
  USER_LOGIN,
  USER_LOGOUT,
  USER_ENTRIES,
  AUTH_ERROR,
  AUTH_SUCCESS,
  LOGIN_ERROR,
} from '../actions/AuthActions';

const initialState = {
  user: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };
    case USER_LOGOUT:
      return { ...state, user: action.payload };
    case USER_ENTRIES:
      return { ...state, user_entries: action.payload };
    case AUTH_ERROR:
      return { ...state, message: action.payload };
    case AUTH_SUCCESS:
      return { ...state, success: action.payload };
    case LOGIN_ERROR:
      return { ...state, login_error: action.payload };
    default:
      return state;
  }
}
