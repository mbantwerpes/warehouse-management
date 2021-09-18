import { FieldHookConfig, useField } from 'formik';
import React from 'react';
import Typography from '../Typography/Typography';
import styles from './Select.module.css';

type ICustomFieldProps = {
  label?: string;
  required?: boolean;
};

const Select: React.FC<FieldHookConfig<string> & ICustomFieldProps> = ({
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
      <select {...field} name={props.name} className={styles.select}>
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        // TODO MAKE THIS TO OWN COMPONENT AND USE IT IN INPUT, TEXTAREA AND SELECT
        <Typography type="text" size="s" className={styles.errorMessage}>
          {meta.error}
        </Typography>
      ) : null}
    </div>
  );
};

export default Select;
