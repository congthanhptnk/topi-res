import React from 'react';

const SinglePastOrder = ({ item }) => {
  const { orders, time, total } = item;

  const renderOrderList = () => {
    return orders.map(order => {
      const { name, id } = order.foodItem;
      return (
        <li key={id}>
          <p>{order.amount}</p>
          <p>{name}</p>
        </li>
      )
    })
  }

  return(
    <div>
      {renderOrderList()}
      <p>time: {time}</p>
      <p>total: &euro; {total}</p>
    </div>
  )
}

export default SinglePastOrder;
