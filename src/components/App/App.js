import React from 'react';
import Button from '../reusable/Button';
import Header from '../reusable/Header';
import Footer from '../reusable/Footer';
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
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />
          <FoodOption name="Sushi" ingredients="Salmon, rice, vinegar" />

        </div>
        <div className={styles.divider}/>
        <div className={styles.orderListContainer}>
          <h1 className={styles.orderTitle}>Order</h1>
          <OrderList />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
