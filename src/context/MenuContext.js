import React from 'react';
import FoodItem from '../models/FoodItem';

const MenuContext = React.createContext();

const initalState = {
  orders: []
};

const reducer = (state, action) => {
  switch(action.type){
    case "order":
      console.log(action.payload);
      return {orders: [...state.orders, action.payload]};
    case "remove":
      console.log("remove");
      return initalState;
    default:
      console.log("something")
      return initalState;
  }
}

const MenuProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initalState);
  const value = {state, dispatch};

  return <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>;
}

const MenuConsumer = MenuContext.Consumer;
export {MenuProvider, MenuConsumer};
export default MenuContext;
