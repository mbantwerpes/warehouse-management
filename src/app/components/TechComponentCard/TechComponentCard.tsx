import React from 'react';
import styles from './TechComponentCard.module.css';
import Typography from '../Typography/Typography';

export type TechComponentCardProps = {
  layout: 'horizontal' | 'vertical';
  image: string;
  title: string;
  description: string;
  amount: number;
  editable?: boolean;
};

const TechComponentCard = ({
  layout,
  image,
  title,
  description,
  amount,
  editable = false,
}: TechComponentCardProps): JSX.Element => {
  return (
    <div
      className={`${styles.container} ${
        layout === 'horizontal' ? styles.horizontal : styles.vertical
      }`}
    >
      {/* TODO think about creating img component */}
      <img src={image} alt="placeholder image" className={styles.img} />
      <div className={styles.contentContainer}>
        <div className={styles.titleAndDescription}>
          <Typography type="header" size="xs">
            {title}
          </Typography>
          <div className={styles.description}>
            <Typography type="text" size="s">
              {description}
            </Typography>
          </div>
        </div>
        {editable && layout === 'horizontal' ? (
          <div className={styles.editableContent}>
            {/* TODO replace with amount and delete component */}
            <Typography type="text" size="s">
              Anzahl: {amount}
            </Typography>
            <Typography type="text" size="s">
              Löschen
            </Typography>
          </div>
        ) : (
          <Typography type="text" size="s">
            Anzahl: {amount}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default TechComponentCard;