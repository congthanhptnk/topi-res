import React from 'react';
import OrdersReducer, { ordersInitialState } from '../reducers/OrdersReducer';

const OrdersContext = React.createContext();

const OrdersProvider = (props) => {
  const [state, dispatch] = React.useReducer(OrdersReducer, ordersInitialState);
  const value = {state, dispatch};

  return <OrdersContext.Provider value={value}>{props.children}</OrdersContext.Provider>;
}

const OrdersConsumer = OrdersContext.Consumer;
export {OrdersProvider, OrdersConsumer};
export default OrdersContext;
