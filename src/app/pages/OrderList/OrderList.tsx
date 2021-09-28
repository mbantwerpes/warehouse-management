import React from 'react';
import { useHistory } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { Order } from '../../../lib/types/types';
import Navbar from '../../components/Navbar/Navbar';
import OrderCard from '../../components/OrderCard/OrderCard';
import Typography from '../../components/Typography/Typography';
import { useUserContext } from '../../context/UserContext';
import useOrders from '../../hooks/useOrders';
import useStudentOrders from '../../hooks/useStudentOrders';
import styles from './OrderList.module.css';

const OrderList = (): JSX.Element => {
  const user = useUserContext();

  const history = useHistory();

  let status = undefined;
  let orders: Order[] | undefined = undefined;
  if (user.role === 'student') {
    ({ status, data: orders } = useStudentOrders(user.id));
  } else {
    ({ status, data: orders } = useOrders());
  }

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
          {status === 'loading' ? (
            <PulseLoader loading={true} size={20} color={'#fff'} />
          ) : status === 'error' ? (
            <Typography type="header" size="s">
              Beim laden der Bauteile ist etwas schief gelaufen
            </Typography>
          ) : orders?.length === 0 ? (
            <Typography type="header" size="s">
              Keine Ausleihaufträge vorhanden
            </Typography>
          ) : (
            orders?.map((order) => {
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
            })
          )}
        </section>
      </div>
      <Navbar active="order" />
    </div>
  );
};

export default OrderList;
