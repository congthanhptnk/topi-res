import React from 'react';
import Menu from './Menu';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import OrderList from './OrderList';
import Button from './reusable/Button';
import styles from './Home.module.css';

import MenuContext from '../context/MenuContext';
import { GET_MENU } from '../reducers/types';
import { getMenu } from '../api/MenuApi';

const Home = () => {

  const onSignIn = () => {
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
      <Button type="submit" value="Add" text="Signin" onClick={onSignIn}/>
      <Footer />
    </>
  );
};

export default Home;
