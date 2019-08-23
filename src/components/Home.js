import React from 'react';
import Menu from './Menu';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import OrderList from './OrderList';
import Button from './reusable/Button';
import styles from './Home.module.css';

import { AuthContext } from '../context';
import { logout } from '../api';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
  const { state, dispatch } = React.useContext(AuthContext);

  const onLogout = () => {
    logout(value => {
      dispatch(value);
    });
  }

  React.useEffect(() => {
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
