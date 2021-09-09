import React, { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './UserCard.module.css';

export type UserCardProps = {
  name: string;
  matrNr: string;
  email: string;
};

const UserCard = ({ name, matrNr, email }: UserCardProps): JSX.Element => {
  return (
    <div>
      <Typography type="header" size="s">
        Name:
      </Typography>
    </div>
  );
};

export default UserCard;
