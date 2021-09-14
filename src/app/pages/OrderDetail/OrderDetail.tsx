import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import styles from './OrderDetail.module.css';

const OrderDetail = (): JSX.Element => {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/order');
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
