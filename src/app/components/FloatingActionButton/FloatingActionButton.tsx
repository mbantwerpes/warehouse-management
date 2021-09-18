import React from 'react';
import { ReactNode } from 'react';
import styles from './FloatingActionButton.module.css';

export type FloatingActionButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
};

const FloatingActionButton = ({
  icon,
  onClick,
}: FloatingActionButtonProps): JSX.Element => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon}
    </button>
  );
};

export default FloatingActionButton;
