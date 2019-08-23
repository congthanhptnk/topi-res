import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGOUT_USER,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS
} from './types'

const authInitialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

const AuthReducer = (state, action) => {
  switch(action.type){
    case LOGIN_USER_SUCCESS:
      return {...state, ...authInitialState, user: action.payload};
    case LOGIN_USER_FAIL:
      return {...state, ...authInitialState, error: action.payload};
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, pass: action.payload};
    case LOGOUT_USER:
      return authInitialState;
    case SIGNUP_USER_FAIL:
      return {...state, error: action.payload};
    case SIGNUP_USER_SUCCESS:
      return {...state, ...authInitialState, user: action.payload};
    default:
      return authInitialState;
  };
};

export { authInitialState, AuthReducer };
