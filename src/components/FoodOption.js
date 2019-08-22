import React from 'react';
import styles from './FoodOption.module.css';
import Button from './reusable/Button';

const FoodOption = ({ name, ingredients, price }) => {
  return(
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.ingredients}>{ingredients}</p>
      </div>
      <p className={styles.price}>{price}</p>
      <Button type="submit" text="Select"/>
    </div>
  );
};

export default FoodOption;
