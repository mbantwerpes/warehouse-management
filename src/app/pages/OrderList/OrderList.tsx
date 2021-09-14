import React from 'react';
import useOrders from '../../hooks/useOrders';
import styles from './OrderList.module.css';

const OrderList = (): JSX.Element => {
  const { orders } = useOrders();
  console.log(orders);

  return <div className={styles.container}></div>;
};

export default OrderList;
