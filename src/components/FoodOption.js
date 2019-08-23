import React, { useContext } from 'react';
import styles from './FoodOption.module.css';
import Button from './reusable/Button';
import { OrdersContext } from '../context';
import { ORDER_ITEM } from '../reducers/types';

const FoodOption = ({ foodItem }) => {
  const {state, dispatch} = useContext(OrdersContext);
  const {name, ingredients, price} = foodItem;

  const onClick = () => {
    dispatch({type: ORDER_ITEM, payload: foodItem});
  }

  return(
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.ingredients}>{ingredients}</p>
      </div>
      <p className={styles.price}>&euro; {price}</p>
      <Button type="submit" text="Select" onClick={onClick}/>
    </div>
  );
};

export default FoodOption;
