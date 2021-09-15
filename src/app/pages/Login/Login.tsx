import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (): JSX.Element => {
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
