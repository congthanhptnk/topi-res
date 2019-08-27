import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS
} from './types'

const authInitialState = {
  user: null,
  loginError: '',
  signupError: '',
  loading: false
};

const AuthReducer = (state, action) => {
  switch(action.type){
    case LOGIN_USER_SUCCESS:
      return {...state, ...authInitialState, user: action.payload};
    case LOGIN_USER_FAIL:
      return {...state, ...authInitialState, loginError: action.payload};
    case LOGOUT_USER:
      return authInitialState;
    case SIGNUP_USER_FAIL:
      return {...state, ...authInitialState, signupError: action.payload};
    case SIGNUP_USER_SUCCESS:
      return {...state, ...authInitialState, user: action.payload};
    default:
      return authInitialState;
  };
};

export { authInitialState, AuthReducer };
