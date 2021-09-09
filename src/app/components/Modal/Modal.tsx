import React from 'react';
import ReactDOM from 'react-dom';
import Divider from '../Divider/Divider';
import Typography from '../Typography/Typography';
import styles from './Modal.module.css';
import { MdCancel } from 'react-icons/md';

export type ModalProps = {
  children: React.ReactChild;
  closeModal: () => void;
  title: string;
};

const Modal = React.memo(({ children, closeModal, title }: ModalProps) => {
  const domEl = document.querySelector('#modal-root');

  if (!domEl) return null;

  // This is where the magic happens -> our modal div will be rendered into our 'modal-root' div, no matter where we
  // use this component inside our React tree
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Typography type="header" size="l">
          {title}
        </Typography>
        <button onClick={closeModal} className={styles.closeButton}>
          <MdCancel size={16} />
        </button>
      </div>
      <Divider />
      <div className={styles.content}>{children}</div>
    </div>,
    domEl
  );
});

export default Modal;
