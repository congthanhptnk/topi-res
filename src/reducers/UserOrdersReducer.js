import {
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  POST_ORDER_SUCCESS
} from './types';

const userOrdersInitState = {
  userOrders:[]
}

const UserOrdersReducer = (state, action) => {
  switch(action.type) {
    case "POST_ORDER_SUCCESS":
      return userOrdersInitState;
    case "GET_ORDER_FAIL":
      return null;
    case "GET_ORDER_SUCCESS":
      return null;
    default:
      return userOrdersInitState;
  }
}

export { UserOrdersReducer, userOrdersInitState };
