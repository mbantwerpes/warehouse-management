import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type Props = {
  children: React.ReactChild;
  closeModal: () => void;
  title: string;
};

const Modal = React.memo(({ children, closeModal, title }: Props) => {
  const domEl = document.querySelector('#modal-root');

  if (!domEl) return null;

  // This is where the magic happens -> our modal div will be rendered into our 'modal-root' div, no matter where we
  // use this component inside our React tree
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        <button onClick={closeModal}>X</button>
      </div>
      {children}
    </div>,
    domEl
  );
});

export default Modal;
