import firebase from 'firebase/app';
import {
  POST_ORDER_SUCCESS
} from "../reducers/types";

export const postUserOrder = (orders, total, cb) => {
  const { currentUser } = firebase.auth();
  const time = new Date();

  firebase.database().ref(`/users/${currentUser.uid}/history`)
    .push({orders: orders, time: time, total: total})
    .then((x) => {
      console.log("Check please " + x);
      cb();
    })
}
