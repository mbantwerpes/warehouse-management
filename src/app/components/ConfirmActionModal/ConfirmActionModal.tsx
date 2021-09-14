import React from 'react';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import styles from './ConfirmActionModal.module.css';

export type ConfirmActionModalProps = {
  onConfirmAction: () => void;
  onClose: () => void;
  content: string;
  confirmButtonText: string;
};

const ConfirmActionModal = ({
  onConfirmAction,
  onClose,
  content,
  confirmButtonText,
}: ConfirmActionModalProps): JSX.Element => {
  return (
    <div>
      <Typography type="text" size="m">
        {content}
      </Typography>
      <div className={styles.buttonContainer}>
        <Button type="error" size="m" onClick={onClose}>
          Abbrechen
        </Button>
        <Button type="primary" size="m" onClick={onConfirmAction}>
          {confirmButtonText}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmActionModal;
