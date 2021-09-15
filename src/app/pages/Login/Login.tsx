import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (): JSX.Element => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = () => {
    console.log('placeholder');
  };

  return (
    <div>
      <LoginForm
        emailValue={emailValue}
        passwordValue={passwordValue}
        onSubmit={handleSubmit}
        setEmailValue={setEmailValue}
        setPasswordValue={setPasswordValue}
      ></LoginForm>
    </div>
  );
};

export default Login;
