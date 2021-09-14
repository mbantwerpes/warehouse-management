import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import useOrder from '../../hooks/useOrder';
import useTechComponents from '../../hooks/useTechComponents';
import styles from './OrderDetail.module.css';

const OrderDetail = (): JSX.Element => {
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

  console.log(techComponents);

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
          Rückgabefrist:
        </Typography>
        <Typography type="text" size="l">
          {order?.returnPeriod ? order.returnPeriod : '-'}
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
      <div className={styles.content}></div>
      <Button
        type="primary"
        size="l"
        onClick={() => console.log('placeholder')}
      >
        Ausleihauftrag bestätigen
      </Button>
    </div>
  );
};

export default OrderDetail;
