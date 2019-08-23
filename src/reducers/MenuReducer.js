const menuInitialState = {
  menu: {}
};

const MenuReducer = (state, action) => {
  switch(action.type){
    case "get-menu":
      return null;
    default:
      return null;
  };
};

export { menuInitialState };
export default MenuReducer;
