import React from 'react';
import Typography from '../Typography/Typography';
import styles from './UserCard.module.css';

export type UserCardProps = {
  id: string;
  name: string;
  matrNr: string;
  email: string;
  onClick: (id: string) => void;
};

const UserCard = ({
  id,
  name,
  matrNr,
  email,
  onClick,
}: UserCardProps): JSX.Element => {
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
          Matrikelnummer:
        </Typography>
        <Typography type="text" size="m">
          {matrNr}
        </Typography>
      </div>
      <div className={styles.flex}>
        <Typography type="header" size="s">
          Email:
        </Typography>
        <Typography type="text" size="m">
          {email}
        </Typography>
      </div>
    </div>
  );
};

export default UserCard;
