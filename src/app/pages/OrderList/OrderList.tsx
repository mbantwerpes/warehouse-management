import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OrderCard from '../../components/OrderCard/OrderCard';
import Typography from '../../components/Typography/Typography';
import useOrders from '../../hooks/useOrders';
import styles from './OrderList.module.css';

const OrderList = (): JSX.Element => {
  const { orders } = useOrders();
  console.log(orders);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Typography type="header" size="xl">
            Ausleihaufträge.
          </Typography>
        </header>
        <section className={styles.contentContainer}>
          <OrderCard
            name="123"
            reservedAt="123"
            returnAt="123"
            status="reserviert"
          />
          <OrderCard
            name="123"
            reservedAt="123"
            returnAt="123"
            status="reserviert"
          />
          <OrderCard
            name="123"
            reservedAt="123"
            returnAt="123"
            status="reserviert"
          />
          <OrderCard
            name="123"
            reservedAt="123"
            returnAt="123"
            status="reserviert"
          />
          <OrderCard
            name="123"
            reservedAt="123"
            returnAt="123"
            status="reserviert"
          />
          <OrderCard
            name="123"
            reservedAt="123"
            returnAt="123"
            status="reserviert"
          />
          <OrderCard
            name="123"
            reservedAt="123"
            returnAt="123"
            status="reserviert"
          />
        </section>
      </div>
      <Navbar active="order" />
    </div>
  );
};

export default OrderList;
