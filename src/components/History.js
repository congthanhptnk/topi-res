import React, { useContext } from 'react';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import Button from './reusable/Button';
import { getUserOrder } from '../api';
import { UserOrdersContext } from '../context';

const History = () => {
  const { dispatch } = useContext(UserOrdersContext);

  const onHistory = () => {
    getUserOrder((action) => {
      dispatch(action);
    })
  }

  return(
    <>
      <Header />
      <Button type='submit' name='history' text='GET HISTORY' onClick={onHistory} />
      <Footer />
    </>
  );
};

export default History;
