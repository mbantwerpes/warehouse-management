import React from 'react';
import styles from './OrderCard.module.css';
import Typography from '../Typography/Typography';

export type OrderCardProps = {
  id: string;
  name: string;
  reservedAt: string;
  returnAt: string;
  status: string;
  onClick: (id: string) => void;
};

const OrderCard = ({
  id,
  name,
  reservedAt,
  returnAt,
  status,
  onClick,
}: OrderCardProps): JSX.Element => {
  return (
    <div className={styles.container} onClick={() => onClick(id)}>
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
