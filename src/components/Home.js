import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
  const { dispatch } = useContext(AuthContext);
  const resetOrdersDispatch = useContext(OrdersContext).dispatch;

  const onLogout = () => {
    logout(value => {
      dispatch(value);
      resetOrdersDispatch({type: RESET, payload: ''});
    });
  }

  return(
    <div>
      <Header title="Topi">
        <DropdownButton id="dropdown-basic-button" title="">
          <Dropdown.Item>
            <Link to='/history' >History</Link>
          </Dropdown.Item>
        </DropdownButton>
      </Header>
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
    </div>
  );
};

export default withRouter(Home);
