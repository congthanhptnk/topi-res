import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGOUT_USER
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
      return {...state, error: action.payload};
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, pass: action.payload};
    case LOGOUT_USER:
      return authInitialState;
    default:
      return authInitialState;
  };
};

export { authInitialState };
export default AuthReducer;
