import React, { useState } from 'react';
import FoodOption from './FoodOption';
import FoodItem from '../models/FoodItem';
import styles from './Menu.module.css';

const Menu = () => {
  const [ state, setState ] = useState(MenuList);
  const { menu } = state;

  const renderMenu = () => {
    return menu.map(foodItem => {
      return(
        <FoodOption
          key={foodItem.id}
          foodItem={foodItem}
        />
      );
    });
  };

  return(
    <div className={styles.menu}>
      {renderMenu()}
    </div>
  )
};

const MenuList = {
  menu: [
    new FoodItem("Sushi", 50, "Salmon, rice, vinegar", 1 ),
    new FoodItem("Burger", 20, "Beef, bread, lettuce", 2 ),
    new FoodItem("Water", 10, "None", 3 ),
    new FoodItem("Pho", 20, "Beef, rice noodle, onion", 4 ),
    new FoodItem("Fried egg", 570, "Egg, vege oil", 5 ),
    new FoodItem("Tea", 90, "Tea bag, water, sugar", 6 ),
    new FoodItem("Pizza", 70, "Pork, pineapple, bread", 7 )
  ]
};

export default Menu;
