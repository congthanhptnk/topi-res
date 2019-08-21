import React from 'react';
import styles from './OrderList.module.css';

const OrderList = () => {
  return (
    <div>
      <ul className={styles.orderContainer}>
        <li key="1" className={styles.orderItem}>
          <p className={styles.amount}>1x</p>
          <p className={styles.name}>Item</p>
          <p className={styles.price}>10e</p>
          <button className={styles.remove}>
            x
          </button>
        </li>

        <li key="1" className={styles.orderItem}>
          <p className={styles.amount}>1x</p>
          <p className={styles.name}>Item</p>
          <p className={styles.price}>10e</p>
          <button className={styles.remove}>
            x
          </button>
        </li>

        <li key="1" className={styles.orderItem}>
          <p className={styles.amount}>1x</p>
          <p className={styles.name}>Item</p>
          <p className={styles.price}>10e</p>
          <button className={styles.remove}>
            x
          </button>
        </li>

        <li key="1" className={styles.orderItem}>
          <p className={styles.amount}>1x</p>
          <p className={styles.name}>Item</p>
          <p className={styles.price}>10e</p>
          <button className={styles.remove}>
            x
          </button>
        </li>
      </ul>
      <div className={styles.totalContainer}>
        <p>Total price</p>
        <p>&euro; 50</p>
      </div>
    </div>
  );
};

export default OrderList;
