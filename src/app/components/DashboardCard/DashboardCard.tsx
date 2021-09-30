import React, { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './DashboardCard.module.css';

export type DashboardCardProps = {
  title: string;
  amount: number | undefined;
  icon?: ReactNode;
};

const DashboardCard = ({
  title,
  amount,
  icon,
}: DashboardCardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.flex}>
        {icon}
        <Typography type="header" size="m">
          {title}
        </Typography>
      </div>
      <Typography type="text" size="l">
        {amount}
      </Typography>
    </div>
  );
};

export default DashboardCard;
