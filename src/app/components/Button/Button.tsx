import React from 'react';
import { ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
  type: 'primary' | 'secondary' | 'error';
  size: 'm' | 'l' | 'none';
  onClick: () => void;
  className?: string;
};

const Button = ({
  children,
  type,
  size,
  onClick,
  className,
}: ButtonProps): JSX.Element => {
  const typeMap = {
    primary: styles.primary,
    secondary: styles.secondary,
    error: styles.error,
  };

  const sizeMap = {
    m: styles.sizeM,
    l: styles.sizeL,
    none: '',
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${typeMap[type]} ${sizeMap[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
