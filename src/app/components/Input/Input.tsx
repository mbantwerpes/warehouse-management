import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps): JSX.Element => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
};

export default Input;
