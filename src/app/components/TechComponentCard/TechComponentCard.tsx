import React from 'react';
import styles from './TechComponentCard.module.css';
import Typography from '../Typography/Typography';

export type TechComponentCardProps = {
  id: string;
  onCardClick?: (id: string) => void;
  layout: 'horizontal' | 'vertical';
  image: string;
  title: string;
  description: string;
  amount: number;
  editable?: boolean;
  clickable?: boolean;
  onDeleteClick?: (id: string) => void;
};

const TechComponentCard = ({
  id,
  layout,
  image,
  title,
  description,
  amount,
  editable = false,
  // I can't make this optional so its just a default function
  onCardClick = () => {
    return;
  },
  onDeleteClick = () => {
    return;
  },
  clickable = true,
}: TechComponentCardProps): JSX.Element => {
  return (
    <div
      {...(clickable && { onClick: () => onCardClick(id) })}
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
            <div onClick={() => onDeleteClick(id)}>
              <Typography type="text" size="s">
                Löschen
              </Typography>
            </div>
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
