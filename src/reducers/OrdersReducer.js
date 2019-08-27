import Order from "../models/Order";
import {
  ORDER_ITEM,
  REMOVE_ITEM,
  RESET
} from './types';

const ordersInitialState = {
  orders: []
};

const OrdersReducer = (state, action) => {
  switch(action.type){
    case ORDER_ITEM:
      const foodItem = action.payload
      const order = state.orders.find(curOrder => curOrder.foodItem.id === foodItem.id)

      if(order){
        order.increment();
        return ({orders: [...state.orders]})
      } else {
        const newOrder = new Order(foodItem);
        return ({orders: [...state.orders, newOrder]});
      }
    case REMOVE_ITEM:
      const curItem = action.payload;
      if(curItem.amount > 1){
        curItem.decrement();
        return {orders: [...state.orders]};
      } else {
        const orders = state.orders;
        orders.splice(orders.indexOf(curItem), 1);
        return {orders: orders};
      }
    case RESET:
      return ordersInitialState;
    default:
      return ordersInitialState;
  }
};



export { ordersInitialState, OrdersReducer };
