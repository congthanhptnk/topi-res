import React from 'react';
import MenuReducer, { menuInitialState } from '../reducers/MenuReducer';

const MenuContext = React.createContext();

const MenuProvider = (props) => {
  const [state, dispatch] = React.useReducer(MenuReducer, menuInitialState);
  const value = {state, dispatch};

  return <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>;
}

const MenuConsumer = MenuContext.Consumer;
export {MenuProvider, MenuConsumer};
export default MenuContext;
