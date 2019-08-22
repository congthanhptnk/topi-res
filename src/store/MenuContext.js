import React from 'react';
import FoodItem from '../models/FoodItem';

const MenuContext = React.createContext({
  menu: [
    new FoodItem("Sushi", 50, "Salmon, rice, vinegar", 1 ),
    new FoodItem("Burger", 20, "Beef, bread, lettuce", 2 ),
    new FoodItem("Water", 50, "None", 3 ),
    new FoodItem("Pho", 50, "Beef, rice noodle, onion", 4 ),
    new FoodItem("Fried egg", 50, "Egg, vege oil", 5 ),
    new FoodItem("Tea", 50, "Tea bag, water, sugar", 6 ),
    new FoodItem("Pizza", 50, "Pork, pineapple, bread", 7 )
  ],
  orders: {
    something: "something",
    weed: "sdddd"
  }
});

export const MenuProvider = MenuContext.Provider;
export const MenuConsumer = MenuContext.Consumer;
export default MenuContext;
