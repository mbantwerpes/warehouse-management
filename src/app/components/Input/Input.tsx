import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  type: string;
};

const Input = ({ type }: InputProps): JSX.Element => {
  return <input className={styles.input} type={type} placeholder="test" />;
};

export default Input;
