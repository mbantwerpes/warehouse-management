import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export type LoginFormProps = {
  onSubmit: () => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps): JSX.Element => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Email"
        type="text"
        value={passwordValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <Input
        placeholder="Passwort"
        type="password"
        value={emailValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <Button type="primary" size="l">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
