import FoodItem from "../models/FoodItem";
import Order from "../models/Order";

const menuInitialState = {
  orders: []
};

const MenuReducer = (state, action) => {
  switch(action.type){
    case "order":
      const foodItem = action.payload
      const order = state.orders.find(curOrder => curOrder.foodItem.id === foodItem.id)

      if(order){
        order.increment();
        return ({orders: [...state.orders]})
      } else {
        const newOrder = new Order(foodItem);
        return ({orders: [...state.orders, newOrder]});
      }
    case "decrease":
      const curItem = action.payload;
      if(curItem.amount > 1){
        curItem.decrement();
        return {orders: [...state.orders]};
      } else {
        const orders = state.orders;
        orders.splice(orders.indexOf(curItem), 1);
        return {orders: orders};
      }
    default:
      return menuInitialState;
  }
};



export { menuInitialState };
export default MenuReducer;
