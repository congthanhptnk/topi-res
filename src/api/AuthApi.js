import firebase from "firebase";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
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
      const dispatch = {type: LOGIN_USER_FAIL, payload: err};
      cb(dispatch);
    })
}
