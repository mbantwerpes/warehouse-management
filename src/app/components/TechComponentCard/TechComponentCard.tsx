import React from 'react';
import styles from './TechComponentCard.module.css';
import Typography from '../Typography/Typography';

export type TechComponentCardProps = {
  layout: 'horizontal' | 'vertical';
  image: string;
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
    <div
      className={`${styles.container} ${
        layout === 'horizontal' ? styles.horizontal : styles.vertical
      }`}
    >
      <img src={image} alt="placeholder image" />
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
  );
};

export default TechComponentCard;
