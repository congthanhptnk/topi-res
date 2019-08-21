import React from 'react';
import styles from './FoodOption.module.css';
import Button from './Button';

const FoodOption = () => {
  return(
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Name</p>
        <p>Ingredients</p>
      </div>
      <p className={styles.flexTest}>50</p>
      <div>
        <Button type="submit" text="+"/>
      </div>
    </div>
  );
};

export default FoodOption;
