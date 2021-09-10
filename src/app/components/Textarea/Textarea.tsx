import React, { ChangeEvent } from 'react';
import styles from './Textarea.module.css';

export type TextareaProps = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

const Textarea = ({
  placeholder,
  onChange,
  className,
}: TextareaProps): JSX.Element => {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
