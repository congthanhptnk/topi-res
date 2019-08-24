const userOrdersInitState = {
  userOrders:[]
}

const UserOrdersReducer = (state, action) => {
  switch(action.type) {
    case "":
      return userOrdersInitState;
    default:
      return userOrdersInitState;
  }
}

export { UserOrdersReducer, userOrdersInitState };
