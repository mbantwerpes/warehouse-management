import React, { ReactNode } from 'react';
import styles from './Input.module.css';

export type InputProps = {
  type: 'text' | 'password';
  placeholder: string;
  icon?: ReactNode;
};

const Input = ({ type, placeholder, icon }: InputProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type={type} placeholder={placeholder} />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default Input;
