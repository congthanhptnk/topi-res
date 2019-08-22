import React from 'react';
import FoodOption from './FoodOption';
import styles from './Menu.module.css';

const Menu = () => {
  return(
    <div className={styles.menu}>
      <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
      <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
    </div>
  )
};

export default Menu;
