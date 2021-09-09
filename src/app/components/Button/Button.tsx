import React from 'react';
import { ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
  type: 'primary' | 'secondary' | 'error';
  size: 'm' | 'l';
  onClick: () => void;
};

const Button = ({
  children,
  type,
  size,
  onClick,
}: ButtonProps): JSX.Element => {
  const typeMap = {
    primary: styles.primary,
    secondary: styles.secondary,
    error: styles.error,
  };

  const sizeMap = {
    m: styles.sizeM,
    l: styles.sizeL,
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${typeMap[type]} ${sizeMap[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
