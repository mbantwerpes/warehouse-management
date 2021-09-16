import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';

export type LoginFormProps = {
  emailValue: string;
  passwordValue: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmailValue: (email: string) => void;
  setPasswordValue: (password: string) => void;
};

const LoginForm = ({
  emailValue,
  passwordValue,
  onSubmit,
  setEmailValue,
  setPasswordValue,
}: LoginFormProps): JSX.Element => {
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <Input
        placeholder="Email"
        type="text"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <Input
        placeholder="Passwort"
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <Button type="primary" size="l">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
