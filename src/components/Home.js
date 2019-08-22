import React, { useContext } from 'react';
import Menu from './Menu';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import OrderList from './OrderList';
import styles from './Home.module.css';
import MenuContext from '../store/MenuContext';

const Home = () => {
  const { order } = useContext(MenuContext);

  const test = () => {
    console.log(order);
  }

  return(
    <>
      <Header title="Topi"/>
      <div className={styles.mainBody}>
        <Menu />
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
