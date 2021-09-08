import React, { ReactNode } from 'react';
import styles from './Input.module.css';

export type InputProps = {
  value: string;
  onChange: () => void;
  type: 'text' | 'password';
  placeholder: string;
  icon?: ReactNode;
};

const Input = ({
  value,
  onChange,
  type,
  placeholder,
  icon,
}: InputProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <input
        onChange={onChange}
        className={styles.input}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default Input;
