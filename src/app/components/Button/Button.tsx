import React from 'react';
import { ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
  type: 'primary' | 'error';
};

const Button = ({ children, type }: ButtonProps): JSX.Element => {
  const typeMap = {
    primary: styles.primary,
    error: styles.error,
  };

  return (
    <button className={`${styles.button} ${typeMap[type]}`}>{children}</button>
  );
};

export default Button;
