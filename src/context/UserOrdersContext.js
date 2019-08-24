import React from 'react';
import {UserOrdersReducer, userOrdersInitState } from '../reducers';

const UserOrdersContext = React.createContext();

const UserOrdersProvider = (props) => {
  const [state, dispatch] = React.useReducer(UserOrdersReducer, userOrdersInitState);
  const value = {state, dispatch};

  return <UserOrdersContext.Provider value={value}>{props.children}</UserOrdersContext.Provider>;
}

const UserOrdersConsumer = UserOrdersContext.Consumer;
export {UserOrdersProvider, UserOrdersConsumer, UserOrdersContext};
