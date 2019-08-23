import {
  LOGIN_USER,
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
    case LOGIN_USER:
      return null;
    case LOGOUT_USER:
      return null;
    default:
      return null;
  };
};

export { authInitialState };
export default AuthReducer;
