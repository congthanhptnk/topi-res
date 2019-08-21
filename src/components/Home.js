import React from 'react';
import FoodOption from './FoodOption';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import OrderList from './OrderList';
import styles from './Home.module.css';

const Home = () => {
  return(
    <>
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
    </>
  );
};

export default Home;
