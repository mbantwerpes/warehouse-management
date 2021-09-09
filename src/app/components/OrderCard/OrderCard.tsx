import React from 'react';
import styles from './OrderCard.module.css';
import Typography from '../Typography/Typography';

export type OrderCardProps = {
  name: string;
  reservedAt: string;
  returnAt: string;
  status: string;
};

const OrderCard = ({
  name,
  reservedAt,
  returnAt,
  status,
}: OrderCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <Typography type="header" size="s">
          Name:
        </Typography>
        <Typography type="text" size="m">
          {name}
        </Typography>
      </div>
      <div className={styles.flex}>
        <Typography type="header" size="s">
          Ausgeliehen:
        </Typography>
        <Typography type="text" size="m">
          {reservedAt}
        </Typography>
      </div>
      <div className={styles.flex}>
        <Typography type="header" size="s">
          Rückgabefrist:
        </Typography>
        <Typography type="text" size="m">
          {returnAt}
        </Typography>
      </div>
      <div className={styles.flex}>
        <Typography type="header" size="s">
          Status:
        </Typography>
        <Typography type="text" size="m">
          {status}
        </Typography>
      </div>
    </div>
  );
};

export default OrderCard;
