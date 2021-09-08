import React, { ReactNode } from 'react';
import styles from './TechComponentCard.module.css';
import Typography from '../Typography/Typography';

export type TechComponentCardProps = {
  layout: 'horizontal' | 'vertical';
  image: ReactNode;
  title: string;
  description: string;
  amount: number;
};

const TechComponentCard = ({
  layout,
  image,
  title,
  description,
  amount,
}: TechComponentCardProps): JSX.Element => {
  return (
    <>
      {layout ? 'test' : 'test'}
      <div
        className={`${styles.container} ${
          layout === 'horizontal' ? styles.horizontal : styles.vertical
        }`}
      >
        <img
          src="https://i.stack.imgur.com/y9DpT.jpg"
          alt="placeholder image"
        />
        <Typography type="header" size="xs">
          {title}
        </Typography>
        <Typography type="text" size="s">
          {description}
        </Typography>
        <Typography type="text" size="s">
          Anzahl: {amount}
        </Typography>
      </div>
    </>
  );
};

export default TechComponentCard;
