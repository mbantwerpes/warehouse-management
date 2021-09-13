import React from 'react';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import styles from './TechComponentDeleteModal.module.css';

export type TechComponentDeleteModalProps = {
  onDelete: () => void;
  onClose: () => void;
};

const TechComponentDeleteModal = ({
  onDelete,
  onClose,
}: TechComponentDeleteModalProps): JSX.Element => {
  return (
    <div>
      <Typography type="text" size="m">
        Bist du dir sicher, dass du das Bauteil löschen möchtest?
      </Typography>
      <div className={styles.buttonContainer}></div>
      <Button type="error" size="m" onClick={onClose}>
        Abbrechen
      </Button>
      <Button type="primary" size="m" onClick={onDelete}>
        Löschen
      </Button>
    </div>
  );
};

export default TechComponentDeleteModal;
