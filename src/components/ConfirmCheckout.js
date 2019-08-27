import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './ConfirmCheckout.module.css';
import { OrdersContext } from '../context';
import { postUserOrder } from '../api';
import { RESET } from '../reducers/types';

const ConfirmCheckout = ({ show, onHide }) => {
  const { state, dispatch } = useContext(OrdersContext);
  const { orders } = state;

  const getOrderTotal = () => {
    if(state){
      let value = 0
      state.orders.map(curOrder => value += curOrder.total);
      return value;
    } else {
      return 0;
    }
  };

  const onSave = () => {
    const finalOrder = orders.map(curOrder => {
        return curOrder.object
    });
    postUserOrder(finalOrder, getOrderTotal(), () => {
      dispatch({type: RESET, payload: null});
      onHide();
    });
  }

  const renderList = () => {
    return orders.map(curOrder => {
      const { id, name } = curOrder.foodItem;

      return(
        <li key={id} className={styles.listItemContainer}>
          <p className={styles.amount}>{curOrder.amount}</p>
          <p className={styles.name}>{name}</p>
          <p className={styles.total}>&euro; {curOrder.total}</p>
        </li>
      );
    })
  }

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>Order confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className={styles.orderContainer}>
            {renderList()}
          </ul>
          <div className={styles.divider}/>
          <div className={styles.totalContainer}>
            <p className={styles.totalText}>Total</p>
            <p className={styles.totalAmount}>&euro; {getOrderTotal()}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} className={styles.cancelButton}>
            Cancel
          </Button>
          <Button onClick={onSave} className={styles.confirmButton}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmCheckout;
