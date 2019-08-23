import React, { useEffect, useContext } from 'react';
import Menu from './Menu';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import OrderList from './OrderList';
import Button from './reusable/Button';
import styles from './Home.module.css';

import { AuthContext, OrdersContext } from '../context';
import { logout } from '../api';
import { withRouter } from 'react-router-dom';
import { RESET } from '../reducers/types';

const Home = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const resetOrdersDispatch = useContext(OrdersContext).dispatch;

  const onLogout = () => {
    logout(value => {
      dispatch(value);
      resetOrdersDispatch({type: RESET, payload: ''});
    });
  }

  useEffect(() => {
    if(!state.user){
      props.history.push('/');
    }
  })

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
      <Button type="submit" value="Add" text="Logout" onClick={onLogout}/>
      <Footer />
    </>
  );
};

export default withRouter(Home);
