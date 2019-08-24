import React, { useContext, useEffect } from 'react';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import SinglePastOrder from './SinglePastOrder';
import { getUserOrder } from '../api';
import { UserOrdersContext } from '../context';
import styles from './History.module.css';

const History = () => {
  const { state, dispatch } = useContext(UserOrdersContext);

  useEffect(() => {
    getUserOrder((action) => {
      dispatch(action);
    })
  },[dispatch])

  const renderHistory = () => {
    const { userOrders } = state;
    return userOrders.map(item => {
      return(
        <SinglePastOrder key={item.key} item={item}/>
      )
    })
  }

  return(
    <>
      <Header />
      <div className={styles.mainBody}>
      {(state.userOrders.length > 0 ) ? (
        <>
          {renderHistory()}
        </>
      ) : (
        <p>Nothing to see here s</p>
      )}
      </div>
      <Footer />
    </>
  );
};

export default History;
