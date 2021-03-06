import React, { useContext, useState } from 'react';
import styles from './OrderList.module.css';
import Button from './reusable/Button';
import ConfirmCheckout from './ConfirmCheckout';
import { OrdersContext } from '../context';
import {
  REMOVE_ITEM
} from '../reducers/types';

const OrderList = () => {
  const { state, dispatch } = useContext(OrdersContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const getOrderTotal = () => {
    if(state){
      let value = 0
      state.orders.map(curOrder => value += curOrder.total);
      return value;
    } else {
      return 0;
    }
  };
  const checkOut = () => {
    setShowConfirm(true);
  }

  const decreaseItem = (curOrder) => {
    dispatch({type: REMOVE_ITEM, payload: curOrder});
  };

  const updateOrderList = () => {
    if(state){
      const { orders } = state;

      return orders.map(curOrder => {
        const { id, name } = curOrder.foodItem;

        return(
          <li key={id} className={styles.orderItem}>
            <p className={styles.amount}>{curOrder.amount}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>&euro; {curOrder.total}</p>
            <button className={styles.remove} onClick={() => decreaseItem(curOrder)}>
              x
            </button>
          </li>
        );
      });
    };
  };

  return (
    <div>
    {state.orders.length > 0 ? (
      <>
      <ul className={styles.orderContainer}>
        {updateOrderList()}
      </ul>
      <div className={styles.totalContainer}>
        <p className={styles.total}>Total price</p>
        <p className={styles.total}>&euro; {getOrderTotal()}</p>
      </div>
      <div className={styles.checkoutButton}>
        <Button type='submit' name='Order' text='Checkout' onClick={checkOut} style={{width: "inherit"}} />
      </div>
      <ConfirmCheckout
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
      />
      </>
    ) : (
      <p className={styles.placeholderText}>Choose an item on the menu</p>
    )}
    </div>
  );
};

export default OrderList;
