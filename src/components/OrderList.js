import React, { useContext } from 'react';
import styles from './OrderList.module.css';
import Button from './reusable/Button';
import { postUserOrder } from '../api';
import { OrdersContext } from '../context';
import {
  REMOVE_ITEM,
  RESET
} from '../reducers/types';

const OrderList = () => {
  const { state, dispatch } = useContext(OrdersContext);

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
    const finalOrder = state.orders.map(curOrder => {
      return curOrder.object
    })
    postUserOrder(finalOrder, getOrderTotal(), () => {
      dispatch({type: RESET, payload: null});
    });
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
      <Button type='submit' name='Order' text='Checkout' onClick={checkOut} />
      </>
    ) : (<p>something</p>)}
    </div>
  );
};

export default OrderList;
