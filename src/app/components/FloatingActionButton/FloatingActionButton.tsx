import React from 'react';
import { ReactNode } from 'react';
import styles from './FloatingActionButton.module.css';

export type FloatingActionButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
  cartCounter?: number;
};

const FloatingActionButton = ({
  icon,
  onClick,
  cartCounter,
}: FloatingActionButtonProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        {icon}
      </button>
      {cartCounter && <div className={styles.cartCounter}>{cartCounter}</div>}
    </div>
  );
};

export default FloatingActionButton;
