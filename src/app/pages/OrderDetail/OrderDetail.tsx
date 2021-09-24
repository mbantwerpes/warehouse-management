import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import Typography from '../../components/Typography/Typography';
import useOrder from '../../hooks/useOrder';
import styles from './OrderDetail.module.css';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import Input from '../../components/Input/Input';
import { useUserContext } from '../../context/UserContext';
import useTechComponents from '../../hooks/useTechComponents';
import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

const OrderDetail = (): JSX.Element => {
  const { role } = useUserContext();

  const [dateValue, setDateValue] = useState<string>('');

  const history = useHistory();

  const redirectToOrderList = () => {
    history.push('/order');
  };

  const { id }: { id: string } = useParams();

  const { data: order } = useOrder(id);

  const ids: string[] | undefined = order?.techComponents.map(
    (techComponent) => techComponent.techComponentId
  );

  const { data: techComponents } = useTechComponents(undefined, ids);

  const putReservation = async () => {
    const postData = {
      status: 'booked',
      returnPeriod: dateValue,
    };
    const { data } = await axios.put(`/api/order/${id}`, postData);
    return data;
  };

  const putReservationMutation = useMutation(putReservation);

  const handleAcceptReservation = async () => {
    putReservationMutation.mutate();

    toast.info('Ausleihauftrag erfolgreich bestätigt', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    redirectToOrderList();
  };

  const putReturned = async () => {
    const postData = {
      status: 'returned',
    };
    const { data } = await axios.put(`/api/order/${id}`, postData);
    return data;
  };

  const putReturnedMutation = useMutation(putReturned);

  const handleReturnOrder = async () => {
    putReturnedMutation.mutate();

    toast.info('Ausleihauftrag erfolgreich zurückgegeben', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    redirectToOrderList();
  };

  return (
    <div className={styles.container}>
      <header>
        <Button
          type="secondary"
          size="m"
          onClick={redirectToOrderList}
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
          <Typography type="text" size="m">
            {order?._id}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Erstellt:
          </Typography>
          <Typography type="text" size="m">
            {order?.crAt}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Status:
          </Typography>
          <Typography type="text" size="m">
            {order?.status}
          </Typography>
        </div>
        <div className={styles.techComponentDetails}>
          <Typography type="header" size="m">
            Rückgabefrist:
          </Typography>
          <Typography type="text" size="m">
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
              amount={techComponent.amount}
              description={techComponent.description}
              image={
                techComponent?.base64Image
                  ? `data:image/png;base64, ${techComponent?.base64Image}`
                  : placeholderImage
              }
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
