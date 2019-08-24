import React, { useContext, useEffect } from 'react';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import SinglePastOrder from './SinglePastOrder';
import { getUserOrder } from '../api';
import { UserOrdersContext } from '../context';

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
      {(state.userOrders.length > 0 ) ? (
        <>
          {renderHistory()}
        </>
      ) : (
        <p>Nothing to see here </p>
      )}
      <Footer />
    </>
  );
};

export default History;
