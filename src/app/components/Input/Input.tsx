import React, { ChangeEvent, ReactNode } from 'react';
import styles from './Input.module.css';

export type InputProps = {
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'password' | 'number' | 'date' | 'email';
  placeholder: string;
  icon?: ReactNode;
  containerStyling?: string;
  inputStyling?: string;
  readOnly?: boolean;
};

const Input = ({
  value,
  onChange,
  type,
  placeholder,
  icon,
  containerStyling,
  inputStyling,
  readOnly = false,
}: InputProps): JSX.Element => {
  return (
    <div className={`${styles.container} ${containerStyling}`}>
      <input
        onChange={onChange}
        className={`${styles.input} ${inputStyling}`}
        value={value}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default Input;
