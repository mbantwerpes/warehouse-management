import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';
import Typography from '../../components/Typography/Typography';
import Logo from '../../components/Logo/Logo';
import { useUserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';

type LoginValues = {
  email: string;
  password: string;
};

const Login = (): JSX.Element => {
  const { setData } = useUserContext();

  const [loginError, setLoginError] = useState(false);

  const history = useHistory();

  const login = async (values: LoginValues) => {
    try {
      const { data } = await axios.post('/api/auth', values);
      return data;
    } catch (error) {
      setLoginError(true);
      return 'error';
    }
  };

  const loginMutation = useMutation(login);

  const handleSubmit = async (values: LoginValues) => {
    const data = await loginMutation.mutateAsync(values);
    if (data === 'error') return;

    toast.info('Erfolgreich eingeloggt', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    setData(data);

    history.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo width="50" />
        <Typography type="header" size="m">
          Lagerverwaltung
        </Typography>
      </div>
      <div className={styles.loginForm}>
        <LoginForm handleSubmit={handleSubmit} />
        {loginError && (
          <Typography type="text" size="m" className={styles.loginErrorText}>
            Email oder Passwort falsch
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Login;
