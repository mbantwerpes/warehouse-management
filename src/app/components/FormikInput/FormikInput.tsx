import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import styles from './FormikInput.module.css';
import Typography from '../Typography/Typography';

interface ICustomFieldProps {
  label?: string;
  required?: boolean;
}

const Input: React.FC<FieldHookConfig<string> & ICustomFieldProps> = ({
  label,
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={props.id || props.name}>
          <Typography size="s" type="header">
            {label}
            {required && ' *'}
          </Typography>
        </label>
      )}
      <input
        {...field}
        className={styles.input}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.touched && meta.error ? (
        // TODO MAKE THIS TO OWN COMPONENT AND USE IT IN INPUT AND TEXTAREA
        <Typography type="text" size="s" className={styles.errorMessage}>
          {meta.error}
        </Typography>
      ) : null}
    </div>
  );
};

export default Input;
