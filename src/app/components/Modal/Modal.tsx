import React from 'react';
import ReactModal from 'react-modal';
import Divider from '../Divider/Divider';
import Typography from '../Typography/Typography';
import styles from './Modal.module.css';

export type ModalProps = {
  title: string;
  isOpen: boolean;
  children: React.ReactChild;
  hideModal: () => void;
};

const Modal = ({
  children,
  isOpen,
  hideModal,
  title,
}: ModalProps): JSX.Element => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={hideModal}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      overlayClassName={styles.overlay}
      className={styles.container}
    >
      <div className={styles.titleContainer}>
        <Typography type="header" size="l">
          {title}
        </Typography>
        <button onClick={hideModal} className={styles.closeButton}>
          X
        </button>
      </div>
      <Divider />
      <div className={styles.contentContainer}>{children}</div>
    </ReactModal>
  );
};

export default Modal;
