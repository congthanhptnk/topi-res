import React from 'react';
import Button from '../reusable/Button';
import Header from '../reusable/Header';
import FoodOption from '../reusable/FoodOption';
import styles from './App.module.css';
import OrderList from '../OrderList';

function App() {
  return (
    <main className={styles.layout}>
      <Header title="Topi"/>
      <div className={styles.mainBody}>
        <div className={styles.foodOptionContainer}>
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
        </div>
        <div className={styles.orderListContainer}>
          <h1>Order</h1>
          <OrderList />
        </div>
      </div>

      <Button type="submit" value="Add" text="OK" />
    </main>
  );
}

export default App;
