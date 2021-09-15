import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export type LoginFormProps = {
  onSubmit: () => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
      <Input placeholder="Email" type="text" value="123"></Input>
      <Input placeholder="Passwort" type="password" value="123"></Input>
      <Button type="primary" size="l">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
