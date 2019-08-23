import firebase from "firebase/app";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS
} from '../reducers/types';

export const loginUser = (email, password, cb) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('Success ' + user);
      const dispatch = {type: LOGIN_USER_SUCCESS, payload: user};
      cb(dispatch);
    })
    .catch(err => {
      console.log('failed ' + err);
      const dispatch = {type: LOGIN_USER_FAIL, payload: err.message};
      cb(dispatch);
    })
}

export const logout = (cb) => {
  firebase.auth().signOut().then((e) => {
    const dispatch = {type: LOGOUT_USER, payload: e};
    cb(dispatch)
  }, err => {
    console.log(err);
  })
}

export const signupUser = (email, password, cb) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('Success signup');
      const dispatch = {type: SIGNUP_USER_SUCCESS, payload: user};
      cb(dispatch);
    })
    .catch(err => {
      console.log('Failed ' + err);
      const dispatch = {type: SIGNUP_USER_FAIL, payload: err};
      cb(dispatch)
    })
}
