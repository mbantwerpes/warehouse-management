import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import OrderCard from '../../components/OrderCard/OrderCard';
import Typography from '../../components/Typography/Typography';
import useOrders from '../../hooks/useOrders';
import styles from './OrderList.module.css';

const OrderList = (): JSX.Element => {
  const history = useHistory();
  const { orders } = useOrders();

  const handleOrderClick = (id: string) => {
    history.push(`/order/${id}`);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Typography type="header" size="xl">
            Ausleihaufträge.
          </Typography>
        </header>
        <section className={styles.contentContainer}>
          {orders?.map((order) => {
            return (
              <OrderCard
                key={order._id as string}
                id={order._id as string}
                name={order._id as string}
                reservedAt={order.crAt}
                returnAt={order.returnPeriod ? order.returnPeriod : '-'}
                status={order.status}
                onClick={handleOrderClick}
              />
            );
          })}
        </section>
      </div>
      <Navbar active="order" />
    </div>
  );
};

export default OrderList;
