import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

const Login = (): JSX.Element => {
  const history = useHistory();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const login = async () => {
    const postData = {
      email: emailValue,
      password: passwordValue,
    };

    const { data } = await axios.post('/api/auth', postData);
    return data;
  };

  const loginMutation = useMutation(login);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutation.mutate();

    history.push('/');
  };

  return (
    <div className={styles.container}>
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
