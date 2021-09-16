import { forceReRender } from '@storybook/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (): JSX.Element => {
  const history = useHistory();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postData = {
      email: emailValue,
      password: passwordValue,
    };

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    console.log(response);

    history.push('/');
  };

  return (
    <div>
      <LoginForm
        emailValue={emailValue}
        passwordValue={passwordValue}
        onSubmit={handleSubmit}
        setEmailValue={setEmailValue}
        setPasswordValue={setPasswordValue}
      />
    </div>
  );
};

export default Login;
