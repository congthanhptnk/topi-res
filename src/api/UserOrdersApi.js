import firebase from 'firebase/app';
import UserOrders from '../models/UserOrders';
import {
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL
} from "../reducers/types";

export const postUserOrder = (orders, total, cb) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/history`)
    .push({orders: orders, time: curDate(), total: total})
    .then((val) => {
      console.log("Check please " + val);
      cb();
    })
};

export const getUserOrder = (cb) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/history`)
    .on('value', snapshot => {
      cb({type: GET_ORDER_SUCCESS, payload: convertSnapToOrders(snapshot)});
    }, err => {
      cb({type: GET_ORDER_FAIL, payload: err });
    })
}

const convertSnapToOrders = (snap) => {
  let ordersArr = []
  snap.forEach(item => {
    const { orders, time, total } = item.val();
    let aOrder = new UserOrders(orders, time, total);
    aOrder.key = item.key
    ordersArr.push(aOrder);
  })
  return ordersArr;
}

const curDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  const curTime = `${date}/${month}/${year}`;
  return curTime;
}
