import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import Typography from '../../components/Typography/Typography';
import useOrder from '../../hooks/useOrder';
import useTechComponents from '../../hooks/useTechComponents';
import styles from './OrderDetail.module.css';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import Input from '../../components/Input/Input';
import { useUserContext } from '../../context/UserContext';

const OrderDetail = (): JSX.Element => {
  const { role } = useUserContext();

  const [dateValue, setDateValue] = useState<string>('');

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/order');
  };

  const { id }: { id: string } = useParams();

  const { order } = useOrder(id);

  const ids: string[] | undefined = order?.techComponents.map(
    (techComponent) => techComponent.techComponentId
  );

  const { techComponents } = useTechComponents(undefined, ids);

  const handleAcceptReservation = async () => {
    const postData = {
      status: 'booked',
      returnPeriod: dateValue,
    };

    const response = await fetch(`/api/order/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();
    console.log(data);
  };

  const handleReturnOrder = async () => {
    const postData = {
      status: 'returned',
    };

    const response = await fetch(`/api/order/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <header>
        <Button
          type="secondary"
          size="m"
          onClick={handleBackButtonClick}
          className={styles.backButton}
        >
          <MdKeyboardArrowLeft size={32} />
        </Button>
        <Typography type="header" size="xl">
          Ausleihauftrag.
        </Typography>
      </header>
      <section className={styles.orderDetails}>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Name:
          </Typography>
          <Typography type="text" size="l">
            {order?._id}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Erstellt:
          </Typography>
          <Typography type="text" size="l">
            {order?.crAt}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Status:
          </Typography>
          <Typography type="text" size="l">
            {order?.status}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Rückgabefrist:
          </Typography>
          <Typography type="text" size="l">
            {order?.returnPeriod ? order.returnPeriod : ''}
          </Typography>
        </div>
        {role === 'admin' && order?.status === 'reserved' && (
          <Input
            value={dateValue}
            type="date"
            placeholder="tt.mm.jjjj"
            onChange={(e) => setDateValue(e.target.value)}
          />
        )}
      </section>
      <section className={styles.content}>
        {techComponents?.map((techComponent) => {
          const orderTechComponent = order?.techComponents.find(
            (orderTechComponent) =>
              orderTechComponent.techComponentId === techComponent._id
          );
          if (orderTechComponent) {
            techComponent.amount = orderTechComponent.amount;
          }
          return (
            <TechComponentCard
              key={techComponent._id as string}
              id={techComponent._id as string}
              layout="horizontal"
              amount={techComponent.amount}
              description={techComponent.description}
              image={placeholderImage}
              title={techComponent.title}
            />
          );
        })}
      </section>
      {role === 'admin' &&
        (order?.status === 'booked' ? (
          <Button type="primary" size="l" onClick={handleReturnOrder}>
            Rückgabe bestätigen
          </Button>
        ) : order?.status === 'reserved' ? (
          <Button type="primary" size="l" onClick={handleAcceptReservation}>
            Ausleihauftrag bestätigen
          </Button>
        ) : null)}
    </div>
  );
};

export default OrderDetail;
