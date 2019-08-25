import React from 'react';
import styles from './SinglePastOrder.module.css';

const SinglePastOrder = ({ item }) => {
  const { orders, time, total } = item;

  const renderOrderList = () => {
    return orders.map(order => {
      const { name, id } = order.foodItem;
      return (
        <li key={id} className={styles.listItemContainer}>
          <p className={styles.name}>{name}</p>
          <p className={styles.amount}>x {order.amount}</p>
        </li>
      )
    })
  }

  return(
    <div className={styles.container}>
      <div className={styles.boxHeaderContainer}>
        <p className={styles.headerText}>{time}</p>
        <p className={styles.headerText}>&euro; {total}</p>
      </div>
      <ul>
        {renderOrderList()}
      </ul>
    </div>
  )
}

export default SinglePastOrder;
