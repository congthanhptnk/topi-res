import React from 'react';
import styles from './FoodOption.module.css'

const FoodOption = () => {
  return(
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Name</p>
        <p>Ingredients</p>
      </div>
      <p>Price</p>
      <p>Amount</p>
      <button type="submit">Plus</button>
    </div>
  );
};

export default FoodOption;
