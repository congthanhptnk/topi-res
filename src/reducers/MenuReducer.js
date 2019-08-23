import {
  GET_MENU
} from './types';

const menuInitialState = {
  menu: []
};

const MenuReducer = (state, action) => {
  switch(action.type){
    case GET_MENU:
      return {menu: action.payload};
    default:
      return null;
  };
};

export { menuInitialState };
export default MenuReducer;
