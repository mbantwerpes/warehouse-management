import React from 'react';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import styles from './ConfirmReserveCartModal.module.css';

export type ConfirmReserveCartModalProps = {
  onReserve: () => void;
  onClose: () => void;
};

const ConfirmReserveCartModal = ({
  onReserve,
  onClose,
}: ConfirmReserveCartModalProps): JSX.Element => {
  return (
    <div>
      <Typography type="text" size="m">
        Bist du dir sicher, dass du den Warenkorb reservieren möchtest? Diese
        Aktion kann nur von einem Admin rückgängig gemacht werden.
      </Typography>
      <div className={styles.buttonContainer}>
        <Button type="error" size="m" onClick={onClose}>
          Abbrechen
        </Button>
        <Button type="primary" size="m" onClick={onReserve}>
          Reservieren
        </Button>
      </div>
    </div>
  );
};

export default ConfirmReserveCartModal;
