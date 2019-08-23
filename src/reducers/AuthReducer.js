import firebase from 'firebase';
import {
  LOGIN_USER,
  LOGOUT_USER
} from './types'

const authInitialState = {
  isLoggedIn: false
};

const AuthReducer = (state, action) => {
  switch(action.type){
    case LOGIN_USER:
      return firebase.auth().signInAnonymously().then((x) => {
          console.log(x)
          return {isLoggedIn: true};
        }).catch((err) => {
          console.log(err)
          return {isLoggedIn: false};
        });
    case LOGOUT_USER:
      return null;
    default:
      return null;
  };
};

export { authInitialState };
export default AuthReducer;
