import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
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

  const getName = () => {
    if(state.user.email){
      const name = state.user.email.substring(0, state.user.email.lastIndexOf("@"));
      return name;
    }
  }

  const onDisplayHistory = () => {
    props.history.push('/history');
  }

  return(
    <div>
      <Header title="Topi">
        <Dropdown title="User" size="sm" alignRight>
          <Dropdown.Toggle className={styles.toggle}>{getName()}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={onDisplayHistory} className={styles.options}>History</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onLogout} className={styles.options}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Header>
      <div className={styles.mainBody}>
        <Menu />
        <div className={styles.divider}/>
        <div className={styles.orderListContainer}>
          <h1 className={styles.orderTitle}>Order</h1>
          <OrderList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Home);
