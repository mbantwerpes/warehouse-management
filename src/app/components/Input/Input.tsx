import React, { ReactNode } from 'react';
import styles from './Input.module.css';

export type InputProps = {
  value: string;
  onChange: () => void;
  type: 'text' | 'password' | 'number';
  placeholder: string;
  icon?: ReactNode;
  containerStyling?: string;
  inputStyling?: string;
};

const Input = ({
  value,
  onChange,
  type,
  placeholder,
  icon,
  containerStyling,
  inputStyling,
}: InputProps): JSX.Element => {
  return (
    <div className={`${styles.container} ${containerStyling}`}>
      <input
        onChange={onChange}
        className={`${styles.input} ${inputStyling}`}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default Input;
