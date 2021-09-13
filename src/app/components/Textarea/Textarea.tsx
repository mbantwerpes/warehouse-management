import React, { ChangeEvent } from 'react';
import styles from './Textarea.module.css';

export type TextareaProps = {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

const Textarea = ({
  value,
  placeholder,
  onChange,
  className,
}: TextareaProps): JSX.Element => {
  return (
    <textarea
      value={value}
      className={`${styles.textarea} ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
